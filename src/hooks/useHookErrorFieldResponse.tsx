import { useEffect, useState } from 'react';

type IProps = {
    response: any
}
const useHookErrorFieldResponse = (props: IProps) => {
    const { response } = props;

    const [errors, setErrors] = useState<any[]>([]);

    useEffect(()=> {
        setErrors([]);
        if ( response.isError) {
            // @ts-ignore
            const mapError = response?.error?.data?.errors;
            if ( mapError ) {
                var getPropsValues = Object.values(mapError);
                setErrors(getPropsValues);
            } else if ( !response?.error?.data?.success ) {
                let checkIfArray = Array.isArray(response.error.data.message);
                checkIfArray ? setErrors(response.error.data.message) : setErrors([response.error.data.message]);
            }
        } 
    }, [
        response
    ])

  return [errors];
};

export default useHookErrorFieldResponse;