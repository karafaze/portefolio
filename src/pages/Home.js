import React, {useState} from "react";
import Name from "../components/Name";
import Presentation from "../components/Presentation";
import ProjectList from '../components/ProjectList';
import FormContainer from '../components/FormContainer';

export default function Home() {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false)
    
    return (
        <main>
            <Name />
            <Presentation />
            <ProjectList />
            <FormContainer setShowLoading={setShowLoadingSpinner}/>
        </main>
    );
}
