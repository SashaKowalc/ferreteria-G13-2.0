import React from "react";
import SmallCard from "./SmallCard";

let productInDataBase = {
    color: "primary",
    titulo: "producto en base de datos",
    valor: 21,
    icono: "fas fa-film",
};

let amount = {
    color: "success",
    titulo: "Total de ventas",
    valor: 79,
    icono: "fas fa-award",
};

let user = {
    color: "warning",
    titulo: "cantodad de categorias",
    valor: 49,
    icono: "fas fa-user",
};

let cardProps = [productInDataBase, amount, user];

function ContentRowTop() {
    return (
        <div className="row">
            {cardProps.map((producto, index) => {
                return <SmallCard {...producto} key={index} />;
            })}
        </div>
    );
}
export default ContentRowTop;
