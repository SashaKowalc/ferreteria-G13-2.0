import React, { Component } from "react"
import CategoriasMap from "./CategoriasMap";


class ProductosInDb extends Component{
	constructor(){
		super()
		this.state = { categorias: null}
	}

	componentDidMount () {
        fetch("http://localhost:3030/api/products")
        .then(res =>(res.json()))
        .then(result => {
			this.setState({categorias: result.data})
		
		})
    }
	

	render(){
	return (
		<>
			{/* <!-- Genres in DB --> */}
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">categorias en base de datos</h5>
					</div>
					<div className="card-body">
						<div className="row">

							
							{this.state.ProductoLista === null 
							
							? 
								<div>Loading...</div>
							
							:
								this.state.ProductoLista.map((categoriaMap,index)=> {
									return <CategoriasMap{...categoriaMap} key={index}/>
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
	}
}

export default ProductosInDb ;