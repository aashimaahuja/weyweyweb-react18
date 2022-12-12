import React from 'react'
import ClientIcon from '../../svgs/Client'
import ServerIcon from '../../svgs/Server'
import Logo from '../../svgs/ReactLogo'
import './styles.css'

export const Slide3 = () => {

    return (
        <>
            <div className='icon-container'>
                <div style={{display: 'flex', alignItems:'center' }}>
                    <div className="client-icon">
                        <ClientIcon width='150' height='120' />
                    </div>
                    <div className='animatedlogo'>
                        <Logo height='50' width='50'/>
                        <Logo height='50' width='50'/>
                    </div>
                </div>
                <div className="server-icon">
                    <ServerIcon width='120' height='150' />
                </div>
            </div>
        </>
    )

}