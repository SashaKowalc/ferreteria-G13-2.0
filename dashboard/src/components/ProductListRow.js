import React from 'react';


function ProductListRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.categorias}</td>
                    
                    <td>$ {props.precio}</td>
                </tr>
            )
    }
    
        

export default ProductListRow;