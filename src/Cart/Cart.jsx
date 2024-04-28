import React from "react";

const Cart = (props) => {
  const { arrShoesCart, deleteItem, changeOrderNumber } = props;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Order Number</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrShoesCart.map((itemCart, index) => {
            return (
              <tr key={index}>
                <td>{itemCart.id}</td>
                <td>{itemCart.name}</td>
                <td>
                  <img src={itemCart.image} alt="..." width={50} />{" "}
                </td>
                <td>{itemCart.price}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        changeOrderNumber(itemCart.id, 1);
                      }}
                    >
                      +
                    </button>
                    <input
                      className="text-center border-0"
                      style={{ outlineStyle: "none", boxShadow: "none" }}
                      type="text"
                      name="name"
                      value={itemCart.orderNumber}
                      readOnly
                    ></input>
                    <button
                      className="btn btn-dark mx-2"
                      onClick={() => {
                        changeOrderNumber(itemCart.id, -1);
                      }}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>{itemCart.price * itemCart.orderNumber}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteItem(itemCart.id);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <hr /> */}
    </div>
  );
};

export default Cart;
