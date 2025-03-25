import React from "react";
import Card from "../Card/Card"; 
import '../General/general.css';

export const homePage = {
  Explore: [
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Birthday-25-9-24.jpg",
      text: "",
      anchor: "/explore"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Celebrations-25-9-24.jpg",
      text: "",
      anchor: "/learn-more"
    },
    {
      imgSrc: "/images/Anniversary-25-9-24.webp",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Housewarming-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20love%20you-25-9-24.jpg",
      text: "",
      anchor: "/shop"
    },
    {
      imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Desk-8-11-24.jpg",
      text: "",
      anchor: "/shop"
    },
  ]
};

  export const SmallHomepage = {
    Small: [
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Farewell-25-9-24.jpg",
        text: "",
        anchor: ""
      },
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Thank%20You-25-9-24.jpg",
        text: "",
        anchor: ""
      },
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20am%20Sorry-25-9-24.jpg",
        text: "",
        anchor: ""
      },
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Get%20well%20soon-25-9-24.jpg",
        text: "",
        anchor: ""
      },
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/I%20miss%20you-25-9-24.jpg",
        text: "",
        anchor: ""
      },
      {
        imgSrc: "https://beta.fnp.com/assets/images/custom/flowers_24/Flowers%20for%20Every%20Occasion/Condolences-25-9-24.jpg",
        text: "",
        anchor: ""
      },
    ]
  };
  



export default function OccasionSection() {
  return (
    <>
      <h1 className="container heading">Flowers for Every Occasion</h1>
      <div className="container grid-3-col box">
        {homePage.Explore.map((card, index) => (
          <Card
            key={index}
            type="test2"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Explore"
            btnLink={card.anchor}
          />
        ))}
        <div className="flex flowers-row ">
        {SmallHomepage.Small.slice(0, 6).map((card, index) => (
          <Card
            key={index}
            type="test2"
            imgSrc={card.imgSrc}
            title={`Section ${index + 1}`}
            text={card.text}
            btnText="Small"
            btnLink={card.anchor}
          />
        ))}
      </div>
      </div>
    </>
  );
}
