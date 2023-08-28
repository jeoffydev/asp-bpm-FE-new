import { useState, useEffect } from 'react'
import BodyContainerComponent from '../global/BodyContainerComponent';
import { useParams } from "react-router-dom";
import OwnerLoginFinalComponent from './OwnerLoginFinalComponent';
import OwnerLoginComponent from './OwnerLoginComponent';

 

function OwnerCypressFinalLogin() {
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

    
    console.log("EDITID ", editId)
    console.log("localhost ", localhost)
    console.log("secret ", secret)
    return (
        <>
            {
                (editId && localhost) && (
                    <>
                       <OwnerLoginComponent />
                    </>
                )
            }
        </>
    );
}

export default OwnerCypressFinalLogin;
