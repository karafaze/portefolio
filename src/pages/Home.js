import React from "react";
import Name from "../components/Name";
import Presentation from "../components/Presentation";
import GlobalStack from "../components/GlobalStack";
import ProjectList from '../components/ProjectList';
import FormContainer from '../components/FormContainer';

export default function Home() {
    return (
        <main>
            <Name />
            <GlobalStack />
            <Presentation />
            <ProjectList />
            <FormContainer />
        </main>
    );
}