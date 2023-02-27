
import React from "react";
// import imagenFondo from "../assets/images/mandalorian.jpg";
// import GenresInDb from "./GenresInDb";
// import ContentRowMovies from "./ContentRowMovies";
import { Link, Route, Switch } from "react-router-dom";
import imagenFondo from "../assets/images/mandalorian.jpg";


function UltimaCategoriaenDb() {
    return (

        < div className = "row" >
        {/*<!-- Content Row Last Movie in Data Base -->*/ }
        
            {/*<!-- Last Movie in DB -->*/ }
            < div className = "col-lg-6 mb-4" >
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            ultimo producto en base de datos
                            
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: 40 + "rem" }}
                                src={imagenFondo}
                                alt=" Star Wars - Mandalorian "
                            />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolores, consequatur explicabo
                            officia inventore libero veritatis iure
                            voluptate reiciendis a magnam, vitae, aperiam
                            voluptatum non corporis quae dolorem culpa
                            citationem ratione aperiam voluptatum non
                            corporis ratione aperiam voluptatum quae dolorem
                            culpa ratione aperiam voluptatum?
                        </p>
                        {/* <a className="btn btn-danger" target="_blank" rel="nofollow"href="/" > View movie detail </a> */}
                        <Link className="btn btn-danger" to="/producto"><span>View movie detail</span></Link>
                    </div>
                </div>
            </div>
             {/*<!-- End content row last movie in Data Base -->*/ }
         </div>    
       
);
}   
export default UltimaCategoriaenDb;