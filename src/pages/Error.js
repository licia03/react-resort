import React from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';

const Error = props => {
    return (
        <Hero>
            <Banner 
                title="404"
                subtitle="page not found"
            >
                <Link to={`${process.env.PUBLIC_URL}/`}
                    className="btn-primary"
                >
                    return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error
