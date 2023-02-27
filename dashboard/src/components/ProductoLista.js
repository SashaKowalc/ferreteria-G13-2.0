import React from "react";
import Producto from "./Producto";

export default class ProductoLista extends React.Component {
    constructor(props) {
        super(props);
        this.state = { productos: [] };
    }

    async fetchProductos() {
        const response = await fetch("http://localhost:3030/api/products");
        const result = await response.json();
        this.setState({ Producto: result.data });
        console.log("--------------------------------"+result);
    }

    componentDidMount() {
        this.fetchProductos();
    }

    render() {
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
                                        <th>nombre</th>
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
}
