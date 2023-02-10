import React, { useState } from "react";
import { send } from "emailjs-com";

export default function Form() {
    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Fazli",
        email: "",
        message: "",
        from: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            "service_xma4u0a",
            "template_q82rkkp",
            formData,
            "J6c1yuXaSh9Lzmmz7"
        )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <React.Fragment>
            <section id="form" className="form--container">
            <p className="form--message">Please don't hesitate to send me a message if you're looking for a web developer, insights or simply discuss anything regarding web programming ! </p>
            <form onSubmit={handleSubmit} className="form">
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
                        <label className="form--item__label" htmlFor="email">
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
                            How did you end up here ?
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
                    <div className="form--item">
                        <label className="form--item__label" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Tell me a good story"
                            value={formData.message}
                            onChange={handleChange}
                            className="form--item__textarea"
                        />
                    </div>
                    <button className="form--btn" type="submit">
                        Send mail
                    </button>
                </div>
            </form>
            </section>

        </React.Fragment>
    );
}