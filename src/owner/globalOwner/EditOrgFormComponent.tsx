import { useEffect} from 'react';
import { useForm } from "react-hook-form"
import { styled } from '@mui/material/styles'; 
import { IOrgRegister, IOrgTypeView } from "../../services/owner/organizationSliceApi";
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
    onSubmitEdit: (data: IOrgRegister) => void,
    editDetails: IOrgTypeView
} 
const EditOrgFormComponent = (props: IProps) => {

    const { onSubmitEdit, editDetails } = props;



    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors: errorForm },
      } = useForm<IOrgRegister>();

          useEffect(() => {
            if ( editDetails ) {
                const fixToType: IOrgRegister = {
                    companyName: editDetails.companyName,
                    businessDetails: editDetails.businessDetails,
                    address: editDetails.address,
                    active: editDetails?.active.toString() as string,
                    contactEmail: editDetails.contactEmail,
                    contactPerson: editDetails.contactPerson,
                    mobileNumber: editDetails.mobileNumber,
                    phoneNumber: editDetails.phoneNumber,
                    website: editDetails.website
                }
                const arrEdit =   [fixToType]; 
                const fields = ['companyName', 'businessDetails', 'address', 'active', 'contactEmail', 'contactPerson', 'mobileNumber', 'phoneNumber', 'website'];
                //@ts-ignore
                fields.forEach(field => setValue(field, arrEdit[0][field]));
               
            }
      },[
        editDetails,
        setValue
      ])


    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitEdit)} style={{width: '100%', minWidth: 340}}>
             <label>Company Name:</label>
            <input type='text' data-testid="regCompanyName"  {...register("companyName", { required: true })} />
            {errorForm.companyName && <span>Company Name field is required</span>}
            <label>Business Details (optional):</label>
            <input type='text' data-testid="regBusinessDetails"  {...register("businessDetails")} />
            
            <label>Address:</label>
            <input type='text' data-testid="regAddress"  {...register("address", { required: true })} />
            {errorForm.address && <span>Address field is required</span>}
            <label>Contact Person:</label>
            <input type='text' data-testid="regContactPerson"  {...register("contactPerson", { required: true })} />
            {errorForm.contactPerson && <span>Contact Person field is required</span>}

            <label>Contact Email Address:</label>
            <input type='email' data-testid="regEmailOrg"  {...register("contactEmail", { required: true })} />
            {errorForm.contactEmail && <span>Email field is required</span>}

            <label>Phone Number (Optional):</label>
            <input type='text' data-testid="regPhoneNumber"  {...register("phoneNumber")} />
           
            <label>Mobile Number:</label>
            <input type='text' data-testid="regMobileNumber"  {...register("mobileNumber", { required: true })} />
            {errorForm.mobileNumber && <span>MobileNumber field is required</span>}
           
            <label>Website (Optional):</label>
            <input type='text' data-testid="regWebsite"  {...register("website" )} />
           

            <label>Active</label>
            <select data-testid="regActiveOrg"  {...register("active")}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
           
            <input type="submit" value={'Update Organization'}  data-testid="regSubmitOrg"   />
        </FormWrapper>
    )
}

export default EditOrgFormComponent;

