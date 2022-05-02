import React, { useState } from "react";
import Cards from "./Cards";
import './style.css';

const initialCard =[
    {
      content: "Fancy Product",
      price: "$40.00 - $80.00",
      buton2: "View options",
      id: "1",
      bool:false
    },
    {
      id: "2",
      content: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      category: "Sale",
      rating: "5",
      buton1: "able",
      bool: false,
    },
    {
      id: "3",
      content: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
      category: "Sale",
      buton1: "able",
      bool: false,
    },
    {
      id: "4",
      content: "Popular Item",
      price: "$40.00",
      rating: "5",
      buton1: "able",
      bool: false,
    },
    {
      id: "5",
      content: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
      category: "Sale",
      buton1: "able",
      bool: false,
    },
    {
      id: "6",
      content: "Fancy Product",
      price: "$120.00 - $280.00",
      buton2: "View options",
      bool: false,
    },
    {
      id: "7",
      content: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      category: "Sale",
      rating: "5",
      buton1: "able",
      bool: false,
    },
    {
      id: "8",
      content: "Popular Item",
      price: "$40.00",
      rating: "5",
      buton2: "View options",
      bool: false,
    },
  ];
const AllCards = (props) => {

  const { count, setCount } = props;
 const [cardContent,setCardContent] = useState(initialCard)
 const [style, setStyle] = useState("")

  function inc(id) {
    setCount(count + 1);
    setCardContent(
        cardContent.map((value) => {
                if (value.id == id) 
                   value.bool=true 
                  //  document.getElementById("buttons").style="pointer-events:none";
                  setStyle("disable")
                return value;
              })
    )
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {cardContent.map((cardValues) => (
            <div className="col mb-5">
            <div className="card h-100">
              <Cards
                content={cardValues.content}
                price={cardValues.price}
                price1={cardValues.price1}
                price2={cardValues.price2}
                category={cardValues.category}
                rating={cardValues.rating}
                bool={cardValues.bool}
                id={cardValues.id}
              />
             
              {cardValues.buton1 && (
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={() => inc(cardValues.id)}
                      id={style}
                    >
                      {cardValues.bool? "Remove Cart":"Add to Cart"}
                    </a>
                  </div>
                </div>
              )}
              {cardValues.buton2 && (
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      {cardValues.buton2}
                    </a>
                  </div>
                </div>
              )}
            
            </div>
           </div> 
          ))}

        </div>
      </div>
    </section>
  );
};

export default AllCards;
