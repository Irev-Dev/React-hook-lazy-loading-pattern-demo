import React from 'react'
import ReactJson from 'react-json-view'
import {useStore} from './store'

export const ShowStoreContent = () => {
    const [state] = useStore()
    return (
        <ReactJson
            src={state}
            iconStyle={'triangle'}
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
        />
    )
}