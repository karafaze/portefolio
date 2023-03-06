import React from 'react'
import GlobalStack from './GlobalStack'

// export default function Name(){
//     return (
//         <React.Fragment>
//             <div className='top-wrapper'>
//                 <div id="home" className='signature'>
//                     <div className='signature--name'>
//                         <p>Hi, I'm</p>
//                         <div className='signature--name__main'>
//                             <span className='letter-f'>F</span>
//                             <span className='letter-a'>a</span>
//                             <span className='letter-z'>z</span>
//                             <span className='letter-l'>l</span>
//                             <div className='letter-i'>
//                                 <span className='letter-i__point'>.</span>
//                                 <span className='letter-i__bar'>l</span>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <p className='signature--name'>Hi, I'm <span className="signature--name__main">Fazli</span></p> */}
//                     <h1 className='signature--job'>Fullstack Web Developer</h1>
//                 </div>
//                 <GlobalStack />
//             </div>
//         </React.Fragment>
//     )
// }
export default function Name(){
    return (
        <React.Fragment>
            <div className='top-wrapper'>
                <div id="home" className='signature'>
                    <p className='signature--name'>Hi, I'm <span className="signature--name__main">Fazli</span></p>
                    <h1 className='signature--job'>Fullstack Web Developer</h1>
                </div>
                <GlobalStack />
            </div>
        </React.Fragment>
    )
}