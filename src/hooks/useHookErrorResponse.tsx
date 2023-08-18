import { useEffect, useState } from 'react';

type IProps = {
    response: any
}
const useHookErrorResponse = (props: IProps) => {
    const { response } = props;

    const [errors, setErrors] = useState<any[]>([]);

    useEffect(()=> {
        setErrors([]);
        if ( response.isError) {
            //wlet arr = [];
            // @ts-ignore
            // const mapError = response?.error?.data?.message;
            // arr.push(mapError);
            // setErrors(arr);
        } 
    }, [
        response
    ])

    const mapList = (errors.length > 0) ? errors.map((res: any)=><span key={res}>{res}</span>) : [];

  return [errors, mapList];
};

export default useHookErrorResponse;