import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-inner" id="carousal" style={{ objectFit:"contain !!important" }}>
          <div
            class="carousel-caption d-none d-md-block"
            style={{ zIndex: "10" }}
          >
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
              class="d-block w-100"
              alt="..."
              style={{filter:"brightness(20%)"}}
            />
          </div>
          <div class="carousel-item" style={{filter:"brightness(20%)"}}>
            <img
              src="https://media.istockphoto.com/id/137737392/photo/chef-preparing-dish-in-kitchen.jpg?s=612x612&w=0&k=20&c=JO7ZfCewtP4NhBqixWVgotrcnIJbQyAWkBOWT-xZrNY="
              class="d-block w-100"
              alt="..."
              
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.istockphoto.com/id/936610098/photo/spaghetti-bolognese.jpg?s=612x612&w=0&k=20&c=N6Nm0VNOiH-4jX88Ykwia7mprEGY7z5YUw7ZSVhv5cA="
              class="d-block w-100"
              alt="..."
              style={{filter:"brightness(20%)"}}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
