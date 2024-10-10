import { useState, useEffect } from "react"

const Home =()=>{

    const [listaproduto, setListaProduto]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/produto")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setListaProduto(data)
        })
    },[])

    return(
        <>
        <div>
            {listaproduto.map((item, index)=>(
                <div key={index}>
                    {item.nome}
                   <img src={item.foto}/>
                </div>
            ))}            
        </div>
        </>
    )
}
export default Home