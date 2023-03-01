

import React  from 'react';
import { useEffect,useState, useRef} from 'react';

function SearchProductos(){

	

	const apiKey = '1'; 
	const [productos,setProductos]=useState([])
	const [keyword,setKeyword]=useState('')
	
	useEffect(()=>{
		
		let endPoint=`http://localhost:3030/api/products/${apiKey}`
		fetch(endPoint)
		.then(res=>res.json())
		.then(response=>{
			setProductos(response.products)
			console.log('response',response)
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

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onKeyUp={search}  >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input  ref={input}type="text" className="form-control" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Producto para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							productos!==undefined
							 ? productos.map((producto, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{producto.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src="http://localhost:3030/api/products/1"
														alt=" " 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{}</p>
											</div>
										</div>
									</div>
								)
							})
						:null
						}

					</div>
					{ productos===undefined && <div className="alert alert-warning text-center">No se encontraron poductos</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchProductos;
