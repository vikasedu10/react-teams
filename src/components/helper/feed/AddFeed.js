import { useEffect, useState } from "react";

function AddFeed() {
    let initActivity;
    
    if (localStorage.getItem("teams-activity") === null) {
        initActivity = [];
    } else {
        initActivity = JSON.parse(localStorage.getItem("teams-activity"));
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

    }
    
    const [activities, setActivities] = useState(initActivity)
    useEffect(() => {
        localStorage.setItem("teams-activity", JSON.stringify(activities));
    }, [activities]);
    
    return (
        activities, setActivities, addActivity
    )
}
export default AddActivity;