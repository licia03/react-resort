import React, { Component } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../context';
import StyledHero from '../../components/StyledHero';
import './SingleRoom.css';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    
    static contextType = RoomContext;
    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if (!room) {
            return <div className="error">
                <h3>no such could be found</h3>
                <Link to={`${process.env.PUBLIC_URL}/rooms`} className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }

        const { 
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breakfast, 
            pets, 
            images 
        } = room;

        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to={`${process.env.PUBLIC_URL}/rooms`} className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((img, index) => {
                            return <img key={index} src={img} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: ${size}SQFT</h6>
                            <h6>Max capacity: {
                                capacity > 1 ? `${capacity} people` :
                                `${capacity} person`
                                } 
                            </h6>
                            <h6>{pets ? "pets allowed" : "No pets allowed"}</h6>
                            <h6>{breakfast && "Free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>entras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
