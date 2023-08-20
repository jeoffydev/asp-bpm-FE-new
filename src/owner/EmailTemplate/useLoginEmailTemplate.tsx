
import {  useEffect } from 'react'
import emailjs from '@emailjs/browser';

type IProps = {
    secretKey: string,
    ifSuccess : boolean,
    emailTo: string
}
export const useLoginEmailTemplate = (props: IProps) => {
    const { secretKey, ifSuccess, emailTo } = props;
    useEffect(()=>{

        if( ifSuccess && emailTo ) {
            console.count("Send Email Template! ")
            var templateParams = {
                message: secretKey,
                from_name: 'BFM App',
                to_email: emailTo,
                reply_to: 'jhipolito.saas@gmail.com'
            };
            
            emailjs.send('service_kpn673j', 'template_7mv0non', templateParams, 'yJDunARVI70Df6Pxc')
                .then(function(response: any) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error: any) {
                console.log('FAILED...', error);
            });
        }
        

    },[
        secretKey,
        ifSuccess,
        emailTo
    ])

 
  return <></>;
};