import React, { useEffect, useState } from 'react'
import '../../Icon.css';
import { ActivityContent } from './ActivityContent';
import { AddActivityForm } from './AddActivityForm';

export const ActivityList = (props) => {

    const getItemFromL = localStorage.getItem("teamsActivity") || undefined

    let initActivity;

    if (getItemFromL === undefined) {
        initActivity = [];
    } else {
        initActivity = JSON.parse(localStorage.getItem("teamsActivity"));
    }
    // {getItemFromL === undefined ? initActivity = [] : initActivity = []}

    const [activities, setActivities] = useState(initActivity)
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

        localStorage.setItem("teamsActivity", JSON.stringify(activities));
    }

    const deleteActivity = (currentActivity) => {
        setActivities(
            activities.filter((e) => {
                return e !== currentActivity;
            })
        );
        localStorage.setItem("activities", JSON.stringify(activities))
    }

    useEffect(() => {
        localStorage.setItem("teamsActivity", JSON.stringify(activities));
    }, [activities]);

    return (
        <>
            <div className='m-0 col-3 border'>  {/* Add 'row' class if any changes break */}
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

                    <AddActivityForm addActivity={addActivity} />
                </div>
            </div>
            <ActivityContent activities={activities} addActivity={addActivity} deleteActivity={deleteActivity} />
        </>
    )
}
