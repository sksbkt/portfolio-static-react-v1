import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
interface newsLetterProps {
    onValidated: any,
    status: any,
    message: any
}

export default function NewsLetter({ onValidated, status, message }: newsLetterProps) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        email &&
            email.indexOf("@") === -1 &&
            onValidated({
                Email: email,
            })
    }
    function clearFields() {
        setEmail("");
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3> subscribe to our newsletter</h3>
                        {status === 'sending' ? (<Alert>sending...</Alert>) : null}
                        {status === 'error' ? (<Alert variant="danger">{message}</Alert>) : null}
                        {status === 'success' ? (<Alert variant="success">{message}</Alert>) : null}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="new-email-bx">
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email address' />
                                <button type="submit">
                                    <span>
                                        Submit
                                    </span>
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
