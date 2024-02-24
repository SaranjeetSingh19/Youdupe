import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Streaming", "Cricket", "Cooking", "Films", "Courses", "Watched", "Animated films", "New to you"]
  return (
    <div className='flex pl-48'>
      {list.map((btns) => <Button key={btns} name={btns}/>)}
    </div>
  )
}

export default ButtonList