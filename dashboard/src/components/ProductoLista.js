import React from "react";
import Producto from "./Producto";

import { useEffect,useState, useRef} from 'react';

function ProductoLista(){

	

	
	const [producto,setProducto]=useState([])
	const [keyword,setKeyword]=useState('')
	
	useEffect(()=>{
		
		let endPoint=`"http://localhost:3030/api/products`;
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
		
		let inputValue=input.current.value
		console.log(inputValue)
		setKeyword(inputValue)


	}
	
    
        return (
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    Todos los producto en la base de datos
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>producto.nombre</th>
                                        <th>marca</th>
                                        <th>Calificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                               
                                <tbody>
                                    {this.state.productos.map((m) => {
                                        return <Producto key={m.id} producto={m} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
export default ProductoLista
