import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import NewsletterSignup from '../newsletterSignup/NewsletterSignup'
import LuxuryAudioBanner from '../luxuryAudio/LuxuryAudioBanner'
 
 // =========== Layout =========== // 
 function Layout() {
    return (
        <>       
            <div className='container mx-auto'>
                <Navbar />   
                <LuxuryAudioBanner/>            
                <Outlet />
                <NewsletterSignup/>
                <Footer />
            </div>
        </>
    )
 }

 export default Layout