"use client"

import { Avatar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <div className="container-fluid navbar-custom">
            <div className='container-lg'>
                <div className='row p-3'>
                    <div className='col-10 mt-1'>
                        <Typography variant='h4' color='text.primary'>Dyspo</Typography>
                    </div>
                    <div className='col-2 text-end'>
                        <Avatar src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*XFGNaXIiPkGgpcm-cLdG3g.jpeg' alt='Profile picture' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
