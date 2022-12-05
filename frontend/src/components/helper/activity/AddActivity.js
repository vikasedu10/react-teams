import { useEffect, useState } from "react";

function AddActivity() {
    let initActivity;
    
    if (localStorage.getItem("teamsActivity") === null) {
        initActivity = [];
    } else {
        initActivity = JSON.parse(localStorage.getItem("teamsActivity"));
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
        localStorage.setItem("teamsActivity", JSON.stringify(activities));
    }
    
    const [activities, setActivities] = useState(initActivity)
    useEffect(() => {
        localStorage.setItem("teamsActivity", JSON.stringify(activities));
    }, [activities]);
    
    return (
        activities, setActivities, addActivity
    )
}
export default AddActivity;