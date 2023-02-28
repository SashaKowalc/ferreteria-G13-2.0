import React from 'react';
import UltimoproductoenDb from './UltimoproductoenDb';
import CegoriaInDb from './CategoriaInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <UltimoproductoenDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <categoriaInDb/>

        </div>
    )
}

export default ContentRowCenter;