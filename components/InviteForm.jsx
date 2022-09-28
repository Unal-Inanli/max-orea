import React, { useId } from 'react';
import PrimaryButton from './Buttons/PrimaryButton';
import { Controller, useForm } from "react-hook-form";
import FormError from './FormError';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import DispatchContext from '../context/DispatchContext';
import AppStateContext from '../context/AppStateContext';


const InviteForm = ({ buttonText = "Gönder", formContainerStyle = {} }) => {


    const [countryCode, setCountryCode] = React.useState();
    const { modalDispatch } = React.useContext(DispatchContext);
    const { localeContext } = React.useContext(AppStateContext);

    const { mutate, isLoading } = useMutation(SendForm, {
        onSuccess: (res) => {
            if (res.data.status) {
                modalDispatch({
                    type: "success",
                    title: "Başarılı!",
                    body: "Hesabınız Başarıyla oluşturuldu."
                })
            }
            else {
                modalDispatch({
                    type: "failed",
                    title: "Hata!",
                    body: res.data.msg || "İsteğinizi Oluştururken Bir Hata Oluştu."
                })
            }
        },
        onError: (res) => {
            modalDispatch({
                type: "failed",
                title: "Hata!",
                body: res.data.msg || "İsteğinizi Oluştururken Bir Hata Oluştu."
            })
        }
    });


    React.useEffect(() => {
        setCountryCode(localeContext.country_code);
    }, [localeContext]);


    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        mutate({ ...data, countryCode: countryCode });
    };


    return (

        <div className="formdetail" style={formContainerStyle}>
            <div className="row">
                <div className="col-md-12">
                    <div className="formitem">
                        <label>Adınız</label>
                        <input {...register("name", { required: true, min: 1 })} placeholder="Adınız Soyadınız" autoComplete="off" />
                        <FormError condition={errors.name}>This field is required</FormError>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="formitem">
                        <label>E-posta</label>
                        <input {...register("email", { required: true, min: 1 })} placeholder="E-posta" autoComplete="off" />

                        <FormError condition={errors.email}>This field is required</FormError>

                    </div>
                </div>
                <div className="col-md-12">
                    <div className="formitem">
                        <label>Telefon</label>
                        <PhoneInputWithCountry international={true} limitMaxLength={true} defaultCountry={countryCode} onCountryChange={code => setCountryCode(code)} style={{ background: "#171717" }} control={control} rules={{ required: true }} name="phone" placeholder={"Telefon"} />

                        <FormError condition={errors.phone}>This field is required</FormError>

                    </div>
                </div>
                <div className="col-md-12">
                    <PrimaryButton onClick={handleSubmit(onSubmit)}>
                        {buttonText}
                    </PrimaryButton>
                </div>
            </div>
        </div>

    );
}


const SendForm = (data) => {
    return axios.post("https://rotaapi.fxcrm.me/api/new", { name: data.name, mail: data.email, phone: data.phone, ref: "a", ulke: data.countryCode }, {
        headers: {
            "token": "2s98XDwWauJNjpXQRFvPgUwQFQrEEQ"
        }
    });
}



export default InviteForm;
