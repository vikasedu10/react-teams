import React from 'react'
import { ActivityContent } from './helper/ActivityContent'
import { ActivityList } from './helper/ActivityList'

export const Activity = () => {
  return (
    <>
      <div className='col-3 option-list option-list-outer-div'>
          <ActivityList />
      </div>

      <div className='col-8 option-content border'>
          <ActivityContent />
      </div>
    </>
  )
}
