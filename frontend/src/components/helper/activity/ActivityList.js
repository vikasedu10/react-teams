import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../Icon.css';
import { ActivityContent } from './ActivityContent';

export const ActivityList = () => {

    const navigate = useNavigate()
    const activityData = [
        {
            "uid": 1,
            "image": "https://cdn.pixabay.com/photo/2016/10/02/12/15/manila-1709394__480.jpg",
            "title": "Messages in the Advanced Technology Centers in the Philippines community",
            "subject": "Congratulations to the winners of Week 5 of the Ideas to Outcomes FY23 (I2O) weekly raffle! Gary Joy Bautista and Janine Mercado you each win 5,120 Recognition Points. The I2O core team will reach out to you about your prize. You too can win Recognition Points! Keep on creating big ideas across these three themes: Innovate for Business, Innovate for Society, and Innovate for Talent, and submit your entries now until November 16, 2022. Click here for the complete raffle mechanics and to know more about I2O FY23 and the Global Technology Innovation Contest Season 5 (GTIC.)"
        },
        {
            "uid": 2,
            "image": "https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913__480.jpg",
            "title": "Message in the ATCI NA Market Wide People Network community",
            "subject": "I want to share with you my online Art Exhibition directly in Spatial's Metaverse. These are NFTs related to the physical works that I have created starting from 2020. Thanks to everyone and good vision."
        },
        {
            "uid": 3,
            "image": "https://cdn.pixabay.com/photo/2017/07/11/18/07/market-2494520__480.jpg",
            "title": "Somey mentioned General",
            "subject": "General today is the November edition of our Tech Acceleration & Resilience Learning Session. Come and join us for our monthly Enterprise DevOps & SRE Showcase! We will cover a range of different topics"
        },

    ]

    let initActivity;
    
    if (localStorage.getItem("teams-activity") === 'undefined') {
        initActivity = [];
    } else {
        initActivity = localStorage.getItem("teams-activity") !== 'undefined' ? JSON.parse(localStorage.getItem("teams-activity")) : null;
    }
    
    const addActivity = (title, description) => {
        let sno;
        if (activities.length === 0) {
            sno = 0;
        } else {
            sno = activities[activities.length - 1].sno + 1;
        }
        
        const myActivity = {
            sno: sno,
            title: title,
            description: description,
        };
        
        setActivities([...activities, myActivity]);
        
        localStorage.setItem("teams-activity", JSON.stringify(activities));
        // console.log(localStorage.getItem("teams-activity"));
    }

    const deleteActivity = (currentActivity) => {
        setActivities(
            activities.filter((e) => {
                return e !== currentActivity;
            })
        );
        localStorage.setItem("activities", JSON.stringify(activities))
    }
    
    const [activities, setActivities] = useState(initActivity)
    useEffect(() => {
        localStorage.setItem("teams-activity", JSON.stringify(activities));
    }, [activities]);

    return (
        <>
            <div className='m-0 col-3 option-list'>  {/* Add 'row' class if any changes break */}
                <div className='d-flex justify-content-between my-3 px-3'>
                    <h4>Your activities</h4>
                    <div>
                        {/* <i className="fa-solid fa-arrow-down-short-wide"></i> */}
                        <img alt='img1' className='office-icons' src='https://img.icons8.com/fluency/512/microsoft-office-2019.png' />
                    </div>
                </div>
                <hr />

                <div className=''>
                    <div className='d-flex my-1'>
                        <div className='mx-2'>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <span>Feeds</span>
                    </div>

                    <div className="list-group">
                        {activityData.map((e, index) => {
                            return (
                                <button onClick={() => {
                                    navigate("/teams/activity/" + e.uid, { state: "" });
                                }}
                                    type="button" key={index} className="option-list border-0 list-group-item list-group-item-action">
                                    <div className='container p-0 my-1 d-flex'>
                                        <div className='mx-1'>
                                            <img className='people-thumbnail' src={e.image} alt="Tom" />
                                        </div>
                                        <div>
                                            <strong>{e.title}</strong>
                                            <p>
                                                {e['title'].slice(0, 80)}
                                                {e['title'].length > 80 ? "..." : ""}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <ActivityContent activities={activities} addActivity={addActivity} deleteActivity={deleteActivity} />
        </>
    )
}
