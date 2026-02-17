import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-dark p-2 bg-primary text-center">
        About Our Tourism Services
      </h1>

      <div className="container mt-4">
        <div className="row align-items-center mb-4">
          {/* Photo 1 */}
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h3>Explore Beautiful Destinations</h3>
            <p>
              Our tourism services help you discover amazing places around the
              world — from relaxing beaches to exciting adventures. We focus on
              creating unforgettable travel experiences with comfort and safety.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Photo 2 */}
          <div className="col-md-6 order-md-2">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Mountains"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6 order-md-1">
            <h3>Trusted Travel Planning</h3>
            <p>
              We provide customized travel packages, guided tours, and the best
              recommendations so you can enjoy every moment of your journey.
              Travel with confidence and explore the world with us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
