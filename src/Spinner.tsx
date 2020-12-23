import React from 'react'
import {SpinnerRoundOutlined} from "spinners-react"

function Spinner() {
    return (
        <div className = "spinner">
            <SpinnerRoundOutlined size = {80} thickness = {135} speed = {180} color="rgba(57, 87, 172, 1)" />
        </div>
    )
}

export default Spinner
