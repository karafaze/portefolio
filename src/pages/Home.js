import React from "react";
import Name from "../components/Name";
import Presentation from "../components/Presentation";
import GlobalStack from "../components/GlobalStack";
import ProjectList from '../components/ProjectList';
import FormContainer from '../components/FormContainer';
import SectionContainer from "../components/SectionContainer";

export default function Home() {
    return (
        <main>
            <Name />
            <GlobalStack />
            <Presentation />
            <SectionContainer title="Projects">
                <ProjectList />
            </SectionContainer>
            <FormContainer />
        </main>
    );
}
