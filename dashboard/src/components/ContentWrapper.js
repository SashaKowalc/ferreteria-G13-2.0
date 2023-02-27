import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import ProductoLista from "./ProductoLista";
import { Link, Route, Switch } from "react-router-dom";
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Switch>
                    <Route path="/" exact>
                        <ProductoLista />
                        
                        
                    </Route>
        

                </Switch>

                
                <Footer />
            </div>
        </div>
    );
}
export default ContentWrapper;
