import React from "react";
import Button from 'react-bootstrap/Button';

import {ReactComponent as StartImage} from "../images/startImage.svg"

const StartPage = () => {
    return (
        <div className="start-page d-flex flex-column justify-content-around">
            <div className="text-center">
                <StartImage/>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-white m-0 fw-bold">
                    Your Music
                </h1>
                <h1 className="text-white m-0 fw-bold">
                    Your Artists
                </h1>
            </div>
            <div className="d-flex flex-column align-items-center mx-3">
                <Button 
                    type="submit" 
                    variant="dark" 
                    size="lg" 
                    href="/registration"
                    className="w-50 my-2"
                >
                    Create an account
                </Button>
                <Button 
                    type="submit" 
                    variant="light" 
                    size="lg" 
                    href="/login" 
                    className="w-50"
                >
                    I already have an account
                </Button>
            </div>      
        </div>
    )
}

export default StartPage;