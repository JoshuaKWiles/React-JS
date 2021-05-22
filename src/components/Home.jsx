import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="src/20200228_12001.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Wyatt</h1>
            <p>
              This is my home page for my character, Wyatt. He is a boy with really weird legs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
