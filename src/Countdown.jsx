import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Countdown = () => {
    return (
        <>
            <div className="countdown">
                <CountdownCircleTimer isPlaying duration={10}
                    colors={[
                    ['red', 0.33],
                    ['#F7B801', 0.33],
                    ['#a30098', 0.33],
                    ]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>  
            </div>
        </>
    )
}

export default Countdown;
