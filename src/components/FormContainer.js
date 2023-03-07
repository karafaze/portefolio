import React, { useEffect, useState } from "react";
import SectionContainer from "./SectionContainer";
import Form from "./Form";
import LoadingSpinner from "./LoadingSpinner";

export default function FormContainer(props) {
    const [formTopic, setFormTopic] = useState({
        discussion: {
            topic: "discussion",
            isChecked: false,
        },
        joke: {
            topic: "joke",
            isChecked: false,
        },
        work: {
            topic: "work",
            isChecked: false,
        },
    });
    const [currentFormTopic, setCurrentFormTopic] = useState('default')

    const handleClientChoice = (e) => {
        const { name } = e.target;
        setFormTopic(prevFormTopic => {
            return {
                discussion: {
                    topic: "discussion",
                    isChecked: false,
                },
                joke: {
                    topic: "joke",
                    isChecked: false,
                },
                work: {
                    topic: "work",
                    isChecked: false,
                },
                [name]: {
                    topic: name,
                    isChecked: !prevFormTopic[name].isChecked,
                },
            }
        });
    };

    useEffect(() => {
        setCurrentFormTopic(() => {
            let checkedTopic = '';
            for (let topic in formTopic){
                if (formTopic[topic].isChecked){
                    checkedTopic = topic
                }
            }
            return checkedTopic === '' ? 'default' : checkedTopic
        })
    }, [formTopic])

    return (
        <SectionContainer title="Contact me" id="form">
            <LoadingSpinner />
            <form className="preform">
                <p className="preform--title">Are you looking</p>
                <div className="preform--field">
                    <input
                        onChange={handleClientChoice}
                        type="checkbox"
                        id="work"
                        name="work"
                        value="work"
                        checked={formTopic.work.isChecked}
                    />
                    <label 
                        htmlFor="work"
                        className="preform--field__label"
                    >for a web developer ?</label>
                </div>
                <div className="preform--field">
                    <input
                        onChange={handleClientChoice}
                        type="checkbox"
                        id="discussion"
                        name="discussion"
                        value="discussion"
                        checked={formTopic.discussion.isChecked}
                    />
                    <label 
                        htmlFor="discussion"
                        className="preform--field__label"
                    >
                        to discuss web development ?
                    </label>
                </div>
                <div className="preform--field">
                    <input
                        onChange={handleClientChoice}
                        type="checkbox"
                        id="joke"
                        name="joke"
                        value="joke"
                        checked={formTopic.joke.isChecked}
                    />
                    <label 
                        htmlFor="joke"
                        className="preform--field__label"
                    >for a cracking joke ?</label>
                </div>
            </form>
            <p className="preform--hint">(Hint: first option is worth your time)</p>
            <Form currentFormTopic={currentFormTopic} setShowLoading={props.setShowLoading} />
        </SectionContainer>
    );
}
