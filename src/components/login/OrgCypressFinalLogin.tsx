import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import OrgLoginComponent from './OrgLoginComponent';

 

function OrgCypressFinalLogin() {
    let { secret } = useParams();
    const [editId, setEditId] = useState(false);

    const localhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";


    useEffect(()=> {
        if ( secret ) {
            const ownerSecret: string = secret;
            if(ownerSecret === `${process.env.REACT_APP_CYPRESS_LOGIN_LINK}`) {
                setEditId(true);
            }
           
        }
    },[
        secret,    
    ])

  
    return (
        <>
            {
                (editId && localhost) && (
                    <>
                       <OrgLoginComponent />
                    </>
                )
            }
        </>
    );
}

export default OrgCypressFinalLogin;
