import React from "react";

const ProductDetails = ({product, isLoading}) => {
    if(isLoading) return <h3>Product Details Loading...</h3>
  return (
    <>
        <div className="product-details">
            <div className="title-container">
                <h1 className="title-container--title">{product.title}</h1>
            </div>
            <div className="product-details--information">
                <div className="product-details--image">
                    <div className="product-image--container">
                        <img className="product-image" src={product.image}/>
                    </div>
                </div>
                <p className="product-details--description">{product.description}</p>
            </div>
        </div>

    </>
  
    )
};

export default ProductDetails;
