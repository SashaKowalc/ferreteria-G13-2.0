import React  from 'react';
import { useEffect,useState, useRef} from 'react';

function BusquedaProductos(){


	const [keyword, setKeyword] = useState('')
    const [producto, setProducto] = useState([])
	
	useEffect(()=>{
		
		fetch(`http://localhost:3030/api/listProducts`)
		.then(res=>res.json())
		.then((respuesta) => {
				setProducto(respuesta.data);
			})
		.catch(err => console.log(err))
	}, [keyword])

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
				
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onBlur={SearchProducts}  >
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input  ref={input}type="text" className="form-control" />
								</div>
								<button className="btn btn-info">buscador</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productoss para la palabra:{keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							producto!==undefined
							 ? producto.map((produ, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{produ.nombre}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={produ.imagen}
														alt={produ.nombre} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{produ.precio}</p>
											</div>
										</div>
									</div>
								)
							})
						:null
						}

					</div>
					{ producto===undefined && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
				
			}
		</div>
	)
}

export default BusquedaProductos;
