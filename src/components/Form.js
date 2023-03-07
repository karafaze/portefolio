import React, { useState } from "react";
import { send } from "emailjs-com";
import FormMessageInput from "./FormMessageInput";
import LoadingSpinner from "./LoadingSpinner";

export default function Form({currentFormTopic, setShowLoading}) {
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Fazli",
        email: "",
        message: "",
        from: "",
    });

    const checkForFormFields = (form) => {
        if (form.from_name.trim() !== '' 
            && form.email.trim() !== ''
            && form.message.trim() !== ''
            & form.from.trim() !== ''
            ) {
                return true;
            }
        return false;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const loadingSpinner = document.querySelector('#loading-spinner')
        if (checkForFormFields(formData)){
            setShowLoading(prevState => !prevState)
            loadingSpinner.style.display = 'flex'
            send(
                process.env.REACT_APP_FORM_SERVICE_ID,
                process.env.REACT_APP_FORM_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_FORM_USER_ID
            )
                .then((res) => {
                    alert('Thank you for your message !')
                    setFormData(prevForm => {
                        return {
                            ...prevForm,
                            from_name: "",
                            email: "",
                            message: "",
                            from: "",
                        }
                    })
                    loadingSpinner.style.display = 'none'
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert('You need to fill all the fields before submitting the form.')
        }
    };

    return (
        <article className="form">
            <form onSubmit={handleSubmit} className="form--container">
                <div className="form--left">
                    <div className="form--item">
                        <label className="form--item__label" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="name"
                            placeholder="John Doe"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="form--item__input"
                        />
                    </div>
                    <div className="form--item">
                        <label
                            className="form--item__label"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="form--item__input"
                        />
                    </div>
                    <div className="form--item">
                        <label className="form--item__label" htmlFor="from">
                            How do you know me ?
                        </label>
                        <input
                            type="text"
                            name="from"
                            id="from"
                            placeholder="LinkedIn, Random, Ads..."
                            value={formData.from}
                            onChange={handleChange}
                            className="form--item__input"
                        />
                    </div>
                </div>
                <div className="form--right">
                    <FormMessageInput 
                        data={{message: formData.message, handleChange, currentFormTopic}}
                    />
                    <button className="form--btn" type="submit">
                        Send mail
                    </button>
                </div>
            </form>
        </article>
    );
}