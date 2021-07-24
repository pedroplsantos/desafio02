import React, { useState, useEffect } from "react";
import { Container } from "./style";
import api from "../../services/api";
interface IProduct{
  id:number;
  photo:string;
  name: string
  description: string;
  price:number;


}


const Home: React.FC = () => {
  const[data, setData ] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get("").then(
      response => {
        setData(response.data)
      }
    )
  },[])


  return (
    <Container>
      <section>
        { data.map(prod => (
          <div className="product-content" key = {prod.id}>
          <img src={prod.photo}></img>
          <h4>
            {prod.name}
          </h4>
          <span>
            {prod.description}
          </span>
          <h6>{prod.price}</h6>
          </div>
          
        ))}
        
        
      </section>
    </Container>

  );

}

export default Home;