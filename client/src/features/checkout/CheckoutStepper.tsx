import { CheckBox } from "@mui/icons-material";
import { Box, Button, FormControlLabel, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { AddressElement, PaymentElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react"
import Review from "./Review";
import { useFetchAddressQuery, useUpdateUserAddressMutation } from "../accounts/accountApi";

const steps = ['Address', 'Payment', 'Review'];

export default function CheckoutStepper() {
    const[activeStep, setActiveStep] = useState(0);
    const {data, isLoading} = useFetchAddressQuery();    
 
    let name, restAddress;
    if (data) {
        ({name, ...restAddress} = data);
    }


    const [updateAddress] = useUpdateUserAddressMutation()
    const [saveAddressChecked, setSaveAddressChecked] = useState(false);
    const elements = useElements();


    const handleNext = async () => {
        if(activeStep === 0 && saveAddressChecked && elements) {
            const address = await getStripeAddress()
            if(address) await updateAddress(address);
        } 
        setActiveStep(step => step + 1);
    }

    const handleBack = () => {
        setActiveStep(step => step - 1);
    }

    const getStripeAddress = async () => {
        const addressElement = elements?.getElement('address');
        if(!addressElement) return null;
        const {value: {name, address}} = await addressElement.getValue();

        if(name && address) return {...address, name}

        return null;
    }

    if (!data) return <Typography variant="h6">Address data missing</Typography>;

    if(isLoading) return <Typography variant="h6">Loading checkout...</Typography>

  return (
    <Paper sx={{p: 3, borderRadius: 3}}>
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
                return (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                )
            })}
        </Stepper>

        <Box sx={{mt: 2}}>
            <Box sx={{display: activeStep === 0 ? 'block' : 'none'}}>
                <AddressElement
                    options={{
                        mode: 'shipping',
                        defaultValues: {
                            name: name,
                            address: restAddress
                        }

                    }}
                />
                <FormControlLabel
                    sx={{display: 'flex', justifyContent: 'end'}}
                    control={<CheckBox />}
                    checked={saveAddressChecked}
                    onChange={e => setSaveAddressChecked(e.target.checked)}
                    label='Save as default address'
                />
            </Box>
            <Box sx={{display: activeStep === 1 ? 'block' : 'none'}}>
                <PaymentElement />
            </Box>
            <Box sx={{display: activeStep === 2 ? 'block' : 'none'}}>
                <Review />
            </Box>
        </Box>

        <Box display='flex' paddingTop={2} justifyContent='space-between'>
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
        </Box>
    </Paper>
  )
}


