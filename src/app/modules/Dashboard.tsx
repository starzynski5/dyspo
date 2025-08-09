import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 bg-dark p-4 sidebar'>
                    <Typography variant='h4' color='text.primary'>Moje organizacje:</Typography>
                    <br />

                    <Link href="/org/hgfd6j3n53"><Typography variant='h5' color='text.primary'>Inpost Elbląg</Typography></Link>

                    <Link href="/org/hgfd6j3n53"><Typography variant='h5' color='text.primary'>Rossmann Elbląg</Typography></Link>
                </div>

                <div className='col-10'>
                    dashboard tbd
                </div>
            </div>
        </div>
    )
}

export default Dashboard
