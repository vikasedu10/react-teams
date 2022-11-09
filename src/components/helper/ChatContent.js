import React, { useState, useEffect } from 'react'
import '../Icon.css';
import { useLocation } from 'react-router-dom';
import { WriteMessage } from './WriteMessage';
import Chats from "./chats.json";
import { ChatBoxFromSelf, ChatBoxFromSender, ProfileSection } from './SingleChatDiv';

export const ChatContent = (props) => {
    const location = useLocation()
    const testStyle = {
        height: "85%"
    }

    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        const enterprise = "inampudi.dali.priya@accenture.com";
        if (!message) {
            alert("Please type a message to send.")
        } else {
            Chats.map((people) => {
                if (people["enterprise"] === enterprise) {
                    people.chats.concat({ from: "self", message: message })
                }
            })
        }
        console.log(message, "Message sent!!")
        console.log("Message sent:: ", Chats[1]["chats"])

        setMessage("");
    }

    let initPeopleChat = [
        {
            "uid": 10203,
            "status": "active",
            "enterprise": "manpreet.b.bhatia@accenture.com",
            "name": "Bhatia B, Manpreet",
            "image": "https://media.istockphoto.com/id/1350600402/photo/beauty-portrait-of-african-american-girl-in-sunglasses.jpg?b=1&s=170667a&w=0&k=20&c=j2LC1_vwm6p9bMPJnPlNd-QEUv4uri2gM-w1AkpIQWc=",
            "chats": [
                {
                    "from": "sender",
                    "message": "Hi Vikas"
                },
                {
                    "from": "self",
                    "message": "Hi Manpreet"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "Doing good. 😁😁 This is the Longest AWS Series on Youtube in Hindi/Urdu. My aim is to empower all.who are not good in english, but they are willing to learn new things.AWS Series me main try krunga aapko maxiMum lab and theory padhane ki."
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "Doing good. 😁😁 This is the Longest AWS Series on Youtube in Hindi/Urdu. My aim is to empower all.who are not good in english, but they are willing to learn new things.AWS Series me main try krunga aapko maxiMum lab and theory padhane ki."
                }
            ]
        },
        {
            "uid": 10204,
            "status": "inactive",
            "enterprise": "inampudi.dali.priya@accenture.com",
            "name": "Inampudi, Dali Priya",
            "image": "https://media.istockphoto.com/id/468311325/photo/portrait-of-stressed-woman-biting-fingernail.jpg?s=612x612&w=0&k=20&c=WEQ15d0WzMnQQg81kuR-pazZKcp_hCb-TDjDDQ0Pvr0=",
            "chats": [
                {
                    "from": "self",
                    "message": "Hi Dalipriya 🙌"
                },
                {
                    "from": "sender",
                    "message": "Hi Vikas"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. This is just a dummy static content pulled from variable JSON."
                },
                {
                    "from": "self",
                    "message": "Fine."
                },
                {
                    "from": "self",
                    "message": "👍"
                }
            ]
        },
        {
            "uid": 10203,
            "status": "active",
            "enterprise": "pratiksh.kp@accenture.com",
            "name": "Kumar S, Pratiksh",
            "image": "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
            "chats": [
                {
                    "from": "sender",
                    "message": "Hi Vikas"
                },
                {
                    "from": "self",
                    "message": "Hi Pratiksh"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "The start and end parameters specifies the part of the string to extract. 🔥🔥"
                }
            ]
        },
        {
            "uid": 10204,
            "status": "inactive",
            "enterprise": "naveen.kp@accenture.com",
            "name": "Raj K P, Naveen",
            "image": "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
            "chats": [
                {
                    "from": "self",
                    "message": "Hi Naveen"
                },
                {
                    "from": "sender",
                    "message": "Hi Vikas"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "The current locale is based on the language settings of the browser."
                },
                {
                    "from": "self",
                    "message": "Fine."
                }
            ]
        },
        {
            "uid": 10204,
            "status": "inactive",
            "enterprise": "puneet.singh@accenture.com",
            "name": "Singh P, Puneet",
            "image": "https://media.istockphoto.com/id/637933814/photo/portrait-of-businessman-smiling-in-business-office.jpg?s=612x612&w=0&k=20&c=Jd31YY_NSG9zp-wa-dGSNR1DcWwn7xxSt4K7wICoIfc=",
            "chats": [
                {
                    "from": "self",
                    "message": "Hi Puneet"
                },
                {
                    "from": "sender",
                    "message": "Hi Vikas 👍"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "Doing good. This is the Longest AWS Series on Youtube in Hindi/Urdu. My aim is to empower all.who are not good in english, but they are willing to learn new things.AWS Series me main try krunga aapko maxiMum lab and theory padhane ki."
                },
                {
                    "from": "self",
                    "message": "Fine."
                }
            ]
        },
        {
            "uid": 10204,
            "status": "inactive",
            "enterprise": "Sudheer.Chaudhary@accenture.com",
            "name": "Chaudhary D, Sudheer",
            "image": "https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.jpg?s=612x612&w=0&k=20&c=UQGXpeiLrI78nO1B9peUn0D0fCSRrm-J8xohMWG2Lms=",
            "chats": [
                {
                    "from": "self",
                    "message": "Hi Sudheer 😊"
                },
                {
                    "from": "sender",
                    "message": "Hi Vikas"
                },
                {
                    "from": "self",
                    "message": "How are you?"
                },
                {
                    "from": "sender",
                    "message": "I'm good. How are you doing?"
                },
                {
                    "from": "sender",
                    "message": "Doing good. This is the Longest AWS Series on Youtube in Hindi/Urdu. My aim is to empower all.who are not good in english, but they are willing to learn new things.AWS Series me main try krunga aapko maxiMum lab and theory padhane ki."
                },
                {
                    "from": "self",
                    "message": "👍👍"
                }
            ]
        }
    ]

    const saveMessage = (message) => {
        console.log("Saving message: ", message);
        const myChat = {
            from: "self",
            message: message,
        }

        setPeopleChat([...peopleChat, myChat])
    }

    const [peopleChat, setPeopleChat] = useState(initPeopleChat);
    useEffect(() => {

    }, [peopleChat]);



    return (
        <>
            <div className='col-8 option-content border'>
                {props.currentChatState["selected"] !== 'defaultFirst' ?
                    Chats.map((e, index) => {
                        if (e["enterprise"] === props.currentChatState) {
                            return (
                                <>
                                    <ProfileSection name={e["name"]} image={e["image"]} />
                                    <div className="option-content-chats-div align-items-start flex-column mb-1 ms-auto mx-4 border" style={testStyle}>

                                        {e["chats"].map((msg, index) => {
                                            return msg["from"] === "sender" ?
                                                <ChatBoxFromSender index={index} image={e["image"]} message={msg.message} name={e["name"]} />
                                                :
                                                <ChatBoxFromSelf index={index} message={msg.message} />
                                        })}
                                    </div>
                                    <WriteMessage setMessage={setMessage} sendMessage={sendMessage} message={message} />
                                </>
                            )
                        }
                    })
                    :
                    <>
                    <ProfileSection name={Chats[0]["name"]} image={Chats[0]["image"]} />
                    <div className="option-content-chats-div align-items-start flex-column mb-1 ms-auto mx-4 border" style={testStyle}>

                        {Chats[0]["chats"].map((msg, index) => {
                            return msg["from"] === "sender" ?
                                <ChatBoxFromSender index={index} image={Chats[0]["image"]} message={msg.message} name={Chats[0]["name"]} />
                                :
                                <ChatBoxFromSelf index={index} message={msg.message} />
                        })}
                    </div>
                    <WriteMessage setMessage={setMessage} sendMessage={sendMessage} message={message} />
                    </>
                }
            </div>
        </>
    )
}
