import React from "react";
import Name from "../components/Name";
import Presentation from "../components/Presentation";
import GlobalStack from "../components/GlobalStack";
import ProjectList from '../components/ProjectList';
import Form from '../components/Form';

export default function Home() {
    return (
        <main>
            <Name />
            <GlobalStack />
            <Presentation />
            <ProjectList />
            <Form />
        </main>
    );
}
