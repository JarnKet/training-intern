import React from 'react'

function Card({ data }) {

    console.log(data);

  return (
    <div>
      <h3>Profile Card</h3>
      {data?.map((val) => (
        <div>
          <img src={val.img} alt="" />
          <p>Name :{val.name}</p>
          <p>Age : {val.age}</p>
          <p>City :{val.city}</p>
          <p>Followers : {val.followers}</p>
          <p>Likes :{val.likes}</p>
          <p>Photos : {val.photos}</p>
        </div>
      ))}
    </div>
  );
}

export default Card