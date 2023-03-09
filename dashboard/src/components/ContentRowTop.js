import React from "react";
import UltimoProductoenDb from "./UltimoProductoenDb";
import CategoriaInDb from "./CategoriaInDb";
import ContentRowProductos from "./ContentRowProductos";
import { Link, Route, Switch } from "react-router-dom";
import ContentRowCenter from './ContentRowCenter';



function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Ferreteria Dashboard</h1>
            </div>
            <Switch>
            <Route path="/ContentRowProductos" component={ContentRowProductos}/>
            <Route path="/UltimoProductoenDb" component={UltimoProductoenDb}/>
            <Route path="/CategoriaInDb" component={CategoriaInDb}/>
           
            </Switch>
            <ContentRowCenter />
            <ContentRowProductos />

            </div>
        
    );
}
export default ContentRowTop;
