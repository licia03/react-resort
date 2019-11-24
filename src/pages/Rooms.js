import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';

import { Link } from 'react-router-dom';

const Rooms = props => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our rooms">
                    <Link to={`${process.env.PUBLIC_URL}/`} className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}

export default Rooms;

