import React from 'react'
import './Location.css'

export default function Location() {
  return (
    <div>
        <div className="Parent-Container p-4">
            <div className="flex">
                <img src="https://beta.fnp.com/icons/location-Icon.svg" alt="Location Pin" class="w-10 h-10"/>
            <div className='slector'>
                <h2>Delhi</h2>
                <p>New Delhi, Delhi, 110063</p>
            </div>
            </div>
        </div>
    </div>
  );
}
