import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
            </div>
            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt='logo' />
                    <p>Caterwood K12 182 DK Alhnjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className='gpt3__footer-copy'>
                <p>2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer