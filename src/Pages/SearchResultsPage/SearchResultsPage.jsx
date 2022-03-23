import "./SearchResultsPage.css";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Hotels from "../../Components/Hotels/Hotels";
import TripHeader from "../../Components/TripHeader/TripHeader";
import Flights from "../../Components/Flights/Flights";
import Foods from "../../Components/Foods/Foods";

export default function SearchResultsPage(props) {
  return (
    <div className="SearchResultsPage">
      <TripHeader trip={props.trip} />
      <div className="SearchResultsPage-btn-bar">
        <button onClick={() => console.log("hello")}>Flight</button>
        <button onClick={() => props.findHotels()}>Hotels</button>
        <button onClick={() => props.getRestaurants()}>Restaurant</button>
      </div>
      {props.currentCat === "flight" ? <Flights /> : false}
      {props.currentCat === "hotel" ? (
        <Hotels hotels={props.hotels} openHotelDetail={props.openHotelDetail} />
      ) : (
        false
      )}
      {props.currentCat === "rest" ? (
        <Foods getRestaurants={props.restaurants} />
      ) : (
        false
      )}
      <Footer />
    </div>
  );
}
