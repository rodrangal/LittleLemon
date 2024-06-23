import React from "react";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-container">
                <div className="testimonial">
                    <div className="rating">Rating: 5/5</div>
                    <div className="content">
                        <img src="/person1.png" alt="Profile" className="profile-image" />
                        <div className="details">
                            <div className="name">Mary</div>
                            <div className="text">I'm happy with the food.</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="rating">Rating: 5/5</div>
                    <div className="content">
                        <img src="/person2.jpg" alt="Profile" className="profile-image" />
                        <div className="details">
                            <div className="name">John</div>
                            <div className="text">Great fast service!</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="rating">Rating: 4/5</div>
                    <div className="content">
                        <img src="/person3.png" alt="Profile" className="profile-image" />
                        <div className="details">
                            <div className="name">Karen</div>
                            <div className="text">OK</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="rating">Rating: 5/5</div>
                    <div className="content">
                        <img src="/person4.jpg" alt="Profile" className="profile-image" />
                        <div className="details">
                            <div className="name">James</div>
                            <div className="text">Amazing!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;