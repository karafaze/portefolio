import React from 'react';

export default function LoadingSpinner(){
    return (
        <div id="loading-spinner" className='loading--wrapper'>
            <div className='loading--circle__outer'>
                <div className='loading--circle__inner'></div>
            </div>
        </div>
    )
}