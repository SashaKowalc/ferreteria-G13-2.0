import React from 'react';
import UltimoproductoenDb from './UltimoProductoenDb';
import CategoriaInDb from './CategoriaInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <UltimoproductoenDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriaInDb/>

        </div>
    )
}

export default ContentRowCenter;