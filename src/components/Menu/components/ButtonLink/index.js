import React from 'react';

function ButtonLink(objeto){
    return(
        <a href={objeto.href} className={objeto.className}>
            {objeto.children}
        </a>
    );
}

export default ButtonLink;