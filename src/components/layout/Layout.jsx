import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import NewsletterSignup from '../newsletterSignup/NewsletterSignup'

function Layout() {
    return (
        <>
        
            <div className='container mx-auto'>
                <Navbar />
                <Outlet />
                <div>
                    
                </div>
                <NewsletterSignup/>
                <Footer />
            </div>
        </>
    )
}

export default Layout