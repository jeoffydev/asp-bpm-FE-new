import { useEffect} from 'react';
import { useForm } from "react-hook-form"
import { styled } from '@mui/material/styles'; 

import { IAdminRegister, IAdminTypeView } from '../../services/owner/administratorSliceApi';
import { colours } from '../../utils/Helper';

const FormWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    '& input[type=text], input[type=password], input[type=email]': {
        height: '1.8rem',
    },
    '& input, select': {
        padding: '0.5rem',
        border: '1px solid #333',
        borderRadius: '0.3rem',
        marginBottom: '0.3rem',
        backgroundColor: colours.white
    },
    '& select': {
        height: '2.5rem',
    },
    '& input[type=submit]': {
        backgroundColor: colours.primaryBlue,
        color: colours.white,
        height: '3rem',
        marginTop: '1rem'
    },
    '& span': {
        fontSize: '0.8rem',
        fontStyle: 'italic',
        display: 'block',
        marginBottom: '0.4rem',
        color: colours.danger
    },
    '& label': {
        marginTop: '0.5rem',
        fontWeight: 'bold'
    }
 });



interface IProps {
    onSubmitEdit: (data: IAdminRegister) => void,
    editDetails: IAdminTypeView
} 
const EditAdminFormComponent = (props: IProps) => {

    const { onSubmitEdit, editDetails } = props;


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors: errorForm },
      } = useForm<IAdminRegister>();

          useEffect(() => {
            if ( editDetails ) {
                const fixToType: IAdminRegister = {
                        fullName: editDetails?.fullName as string,
                        email: editDetails?.email as string,
                        mobile: editDetails?.mobile,
                        phone: editDetails?.phone,
                        roleId: editDetails?.authRoleId as number,
                        organizationId: editDetails?.organizationId,
                        password: '',
                        confirmPassword: '',
                        active: editDetails?.active.toString() as string
                }
                const arrEdit =   [fixToType]; 
                const fields = ['fullName', 'email', 'mobile', 'phone', 'roleId', 'organizationId', 'password', 'confirmPassword', 'active'];
                //@ts-ignore
                fields.forEach(field => setValue(field, arrEdit[0][field]));
               
            }
      },[
        editDetails,
        setValue
      ])


    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitEdit)} style={{width: '100%', minWidth: 340}}>
            <label>Name:</label>
            <input type='text'  {...register("fullName", { required: true })} />
            {errorForm.fullName && <span>Name field is required</span>}
            <label>Email Address:</label>
            <input type='email' disabled {...register("email", { required: true })} />
            {errorForm.email && <span>Email field is required</span>}

            <label>Mobile (Optional):</label>
            <input type='text' data-testid="regMobileAdmin" {...register("mobile")} />
            <label>Phone (Optional):</label>
            <input type='text' data-testid="regPhoneAdmin" {...register("phone")} />

            <input type='hidden'  {...register("roleId", { required: true })} />
            <input type='hidden' {...register("organizationId", { required: true })} />

            <label>Active</label>
            <select {...register("active")}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <label>Password:</label>
            <input type='password' {...register("password", { required: true })} />
            {errorForm.password && <span>Password field is required</span>}
            <label>Confirm Password:</label>
            <input
                type='password'
                {...register("confirmPassword", {
                    required: true
                })}
                />
            {errorForm.confirmPassword && <span>Confirm Password is required</span>}
            <input type="submit" value={'Update'} />
        </FormWrapper>
    )
}

export default EditAdminFormComponent;

