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
  const[ data, setData ] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCard = (index: number) => {
    const productStore = JSON.stringify(data[index]);
    localStorage.setItem(`@Produto-${index}`, productStore)
  }


  return (
    <Container>
      <section>
        { data.map((prod, index) => (
          <div className="product-content" key = {prod.id}>
          <img src={prod.photo} alt={prod.name}></img>
          <h4>
            {prod.name}
          </h4>
          <span>
            {prod.description}
          </span>
          <h6>{prod.price}</h6>
          <button onClick={ () => handleCard(index)} >Adicionar ao carrinho</button>
          </div>
          
        ))}
        
        
      </section>
    </Container>

  );

}

export default Home;