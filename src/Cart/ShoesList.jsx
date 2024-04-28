import React from "react";

const ShoesList = (props) => {
  const { shoesList, addToCart } = props;

  return (
    <div>
      <div className="row">
        {shoesList.map((shoes, index) => {
          return (
            <div className="col-3 mt-2" key={index}>
              <div className="card">
                <img className="img-fluid" src={shoes.image} alt="..." />
                <div className="card-body">
                  <h3 className="text-truncate">{shoes.name}</h3>
                  <p>{shoes.price}</p>
                  <p className="text-truncate">{shoes.description}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      addToCart(shoes);
                    }}
                  >
                    Add to cart <i className="fa fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoesList;
