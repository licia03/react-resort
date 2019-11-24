import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner 
                    title="Luxurious rooms"
                    subtitle="Deluxe rooms starting at $299"
                >
                    <Link 
                        to={`${process.env.PUBLIC_URL}/rooms`} 
                        className="btn-primary"
                    >
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;

