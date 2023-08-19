
import { useForm } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { IOwnerRegister } from '../services/owner/ownerSliceApi';
import { colours } from "../utils/Helper";

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
    onSubmitHandle: (data: IOwnerRegister) => void,
} 
const RegisterUserFormComponent = (props: IProps) => {

    const { onSubmitHandle } = props;

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<IOwnerRegister>();


    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitHandle)} style={{width: '100%', minWidth: 340}}>
            <label>Name:</label>
            <input type='text' data-testid="regNameOwner"  {...register("fullName", { required: true })} />
            {errorForm.fullName && <span>Name field is required</span>}
            <label>Email Address:</label>
            <input type='email' data-testid="regEmailOwner"  {...register("email", { required: true })} />
            {errorForm.email && <span>Email field is required</span>}
            <label>Active</label>
            <select data-testid="regActiveOwner"  {...register("active")}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <input type='hidden' value={1}  {...register("roleId", { required: true })} />
            <label>Password:</label>
            <input type='password' data-testid="regPw1Owner"  {...register("password", { required: true })} />
            {errorForm.password && <span>Password field is required</span>}
            <label>Confirm Password:</label>
            <input
                data-testid="regPw2Owner" 
                type='password'
                {...register("confirmPassword", {
                    required: true
                })}
                />
            {errorForm.confirmPassword && <span>Confirm Password is required</span>}
            <input type="submit" value={'Submit'}  data-testid="regSubmitOwner"   />
        </FormWrapper>
    )
}

export default RegisterUserFormComponent;

