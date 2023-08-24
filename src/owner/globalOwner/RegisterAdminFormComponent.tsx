
import { useForm } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { IAdminRegister } from "../../services/owner/administratorSliceApi";
import { colours } from "../../utils/Helper";

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
    onSubmitHandle: (data: IAdminRegister) => void,
    orgId: number
} 
const RegisterAdminFormComponent = (props: IProps) => {

    const { onSubmitHandle, orgId } = props;

    const {
        register,
        handleSubmit,
        formState: { errors: errorForm },
      } = useForm<IAdminRegister>();


    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitHandle)} style={{width: '100%', minWidth: 340}}>
            <label>Name:</label>
            <input type='text' data-testid="regNameAdmin"  {...register("fullName", { required: true })} />
            {errorForm.fullName && <span>Name field is required</span>}
            
            <label>Email Address:</label>
            <input type='email' data-testid="regEmailAdmin"  {...register("email", { required: true })} />
            {errorForm.email && <span>Email field is required</span>}
            
            <label>Active</label>
            <select data-testid="regActiveAdmin"  {...register("active")}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <label>Mobile (Optional):</label>
            <input type='text' data-testid="regMobileAdmin" {...register("mobile")} />
            <label>Phone (Optional):</label>
            <input type='text' data-testid="regPhoneAdmin" {...register("phone")} />

            <input type='hidden' value={2}  {...register("roleId", { required: true })} />
            <input type='hidden' value={orgId}  {...register("organizationId", { required: true })} />

            <label>Password:</label>
            <input type='password' data-testid="regPw1Admin"  {...register("password", { required: true })} />
            {errorForm.password && <span>Password field is required</span>}
            <label>Confirm Password:</label>
            <input
                data-testid="regPw2Admin" 
                type='password'
                {...register("confirmPassword", {
                    required: true
                })}
                />
            {errorForm.confirmPassword && <span>Confirm Password is required</span>}

            <input type="submit" value={'Submit'}  data-testid="regSubmitAdmin"   />
        </FormWrapper>
    )
}

export default RegisterAdminFormComponent;

