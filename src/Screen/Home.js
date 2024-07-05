import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Card from "../Component/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* making the carousal */}
      {/* ------------------------- */}

      <div className="m-1">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div
            class="carousel-inner"
            id="carousal"
            style={{ objectFit: "contain !!important" }}
          >
            <div
              class="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <div class="d-flex justify-content-centre">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                />
                {/* <button
                  className="btn btn-outline-success text-white bg-success"
                  type="submit"
                >
                  Search
                </button> */}
              </div>
            </div>
            <div class="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
                class="d-block w-100"
                alt="..."
                style={{ filter: "brightness(20%)" }}
              />
            </div>
            <div class="carousel-item" style={{ filter: "brightness(20%)" }}>
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
                style={{ filter: "brightness(20%)" }}
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

      {/* making the card */}
      {/* ======================= */}

      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                            
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
