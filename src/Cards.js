import React from 'react';

export default function Cards(props){
    const {content, price, price1, price2, rating, category, buton1, buton2,id,inc}=props;
    console.log(props);
    return(
        <div>
            {category &&
        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>{category}</div>
            }
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
            <div className="text-center">
                <h5 className="fw-bolder">{content}</h5>
                {price &&
                   price
                }
                { rating &&
                <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                </div>
                 }
                 {price1 &&
                <span className="text-muted text-decoration-line-through">{price1}</span>
                 }
                 {price2 &&
                    price2
                 }
            </div>
        </div>
        
    </div>
);
}