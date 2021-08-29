import React from 'react'
import ReactCountdownClock from 'react-countdown-clock';

const CountDownClock = () => {
return (
<ReactCountdownClock seconds={60}
                     color="#ff0000"
                     alpha={0.9}
                     size={300}
                      />
)
}

export default CountDownClock;