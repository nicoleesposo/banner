import React from 'react'
import Demo from '../src/components/Demo'
import Tagline from '../src/components/Tagline'


const Banner = () => {
    return(
        <>
            <div className="background">
                <Tagline />
                <Demo />
            </div>
            {/* <div className="background-overlay"></div> */}
        </>
    );
}

export default Banner;