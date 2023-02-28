import React from "react"

import { useEffect,useState, useRef} from 'react';

function Producto(){

	

	
	const [producto,setProducto]=useState([])
	const [keyword,setKeyword]=useState('')
	
	useEffect(()=>{
		
		let endPoint=`http://localhost:3030/api/products/:${keyword}`;
		fetch(endPoint)
		.then(res=>res.json())
		.then(data=>{
			setProducto(data.Search)
			console.log('data',data)
		})
		.catch(err=>console.log(err))
		

	},[keyword]
	)

	const input=useRef()


	const search = e =>{
		e.preventDefault();
		
	

	}


    return (
        <tr>
            <td>{producto.id}</td>
            <td>{producto.title}</td>
            <td>{producto.rating}</td>
            <td>{producto.awards}</td>
            <td>{producto.length}</td>
        </tr>
    );
}
export default Producto 