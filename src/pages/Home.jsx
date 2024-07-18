import {useState} from "react";



import Card from "../components/Card";
import { BrowserRouter  } from "react-router-dom";


function Home() {
  const [data, setData] = useState([
    {
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      name: "Soukthavy Alex",
      age: "23",
      city: "Vientiane",
      followers: "100",
      likes: "80",
      photos: "50",
    }, //sg khor moon state "data" ni pai childComponents pharn props t sue var "data
  ]);

  return (
    <>
      <div>
        {/* Child components */}
        <Card data={data} />
      </div>
    </>
  );
}

export default Home;
