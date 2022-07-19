import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Page3() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let newData = data;
        console.log(newData);
        setUser(newData);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const show = () => {
    fetch(`https://fakestoreapi.com/products/1`).then((response) => {
      return response.json();
      console.log(response);
    });
  };

  return (
    <div onClick={show}>
      {user.map((user) => (
        <div className=" m-5 shadow-lg p-3 mb-5 bg-white rounded ">
          <h4>{user.title}</h4>
          <h4>{user.price}$</h4>
          <p>{user.description}</p>
          <h5>{user.category}</h5>

          <img
            src={user.image}
            className="img-fluid"
            height={150}
            width={150}
          />
          <h4>
            Rating {user.rating.rate} &nbsp;&nbsp;
            {user.rating.count}
          </h4>
        </div>
      ))}
    </div>
  );
}
