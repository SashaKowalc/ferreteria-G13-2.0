import React from "react";

export default function Producto({ producto }) {
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
