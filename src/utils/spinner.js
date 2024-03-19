import React from 'react'
import { LineWave } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <LineWave
            visible={true}
            height="150"
            width="150"
            color="#624F82"
            ariaLabel="line-wave-loading"
            wrapperStyle={{
                minHeight: "40vh",
                justifyContent: "center",
                alignItems: "center"
            }}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
        />
    )
}

export default Spinner
