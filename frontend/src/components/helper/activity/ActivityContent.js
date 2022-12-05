import { ActivitySection } from '../chats/SingleChatDiv';
import { AboutTheSection } from './AboutTheSection';
import { ActivityData } from './ActivityData';

export const ActivityContent = (props) => {
    return (
        <>
            <div className='col-8'>
                <ActivitySection />
                <div className="my-2 col-7 activity-content message-container">
                    <div className='my-3 mx-4'>
                        <AboutTheSection />
                        <h5 className='py-4'>Activities so far..</h5>
                        <hr />
                        {props.activities.length === 0 ?
                            <p>No activities have been published. Start by posting one.</p>
                            :
                            props.activities.slice(0).reverse().map((activity) => {
                                return (
                                    <ActivityData activity={activity} deleteActivity={props.deleteActivity} key={activity.sno} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
