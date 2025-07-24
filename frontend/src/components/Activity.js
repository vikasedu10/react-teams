import React from 'react'
import { ActivityContent } from './helper/activity/ActivityContent'
import { ActivityList } from './helper/activity/ActivityList'

export const Activity = () => {
  return (
    <>
      <div className='col-3 option-list option-list-outer-div'>
          <ActivityList />
      </div>
      <div className="c-instance-table__legends"><i 
      style={{backgroundColor:(myClustersdata.is_active===true)?'#A9E206': (myClustersdata.clusterStatus === 'Cluster Provision In Progress' ? "yellow" : ( myClustersdata.clusterStatus === "Cluster Manually Deleted" ? "red" : "blue"))}}></i></div>



      <div className='col-8 option-content border'>
          <ActivityContent />
      </div>
    </>
  )
}
