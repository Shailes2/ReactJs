import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 5px black",
          padding: "100px 20px",
        }}
      >
        <div>
          <h1 className="display-3 fw-bold">Explore The World With Us</h1>
          <p className="lead">
            Discover amazing destinations, cultures, and unforgettable travel
            experiences.
          </p>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-danger p-3 bg-dark text-center">Tourism Home Page</h1>

      {/* About Tourism */}
      <div className="container mt-4">
        <p className="text-center">
          Tourism allows people to explore new places, learn about cultures,
          enjoy nature, and create beautiful memories. Travel brings relaxation,
          adventure, and new experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                className="card-img-top"
                alt="Beach"
              />
              <div className="card-body">
                <h5>Beach Paradise</h5>
                <p>Enjoy peaceful beaches, sunshine, and relaxing sea views.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="card-img-top"
                alt="Mountains"
              />
              <div className="card-body">
                <h5>Mountain Adventures</h5>
                <p>Explore scenic mountains, fresh air, and nature trails.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="card-img-top"
                alt="Desert"
              />
              <div className="card-body">
                <h5>Desert Safari</h5>
                <p>
                  Experience sand dunes, cultural shows, and adventure rides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
