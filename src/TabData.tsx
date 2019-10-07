import React from 'react'
import {useTabData} from './useTabData'

export const TabData = ({tab}:{tab: 'sweet' | 'rad'}) => {
    const {data, loading, error} = useTabData(tab)
    if(error) return <div>ERROR: error</div>
    if(loading) return <div className='m-4'> loading ...</div>
    return (
        <ul>
            {data.map((item, index) => <li className='m-4' key={index}>{item}</li>)}
        </ul>
    )
}