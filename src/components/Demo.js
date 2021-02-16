import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Demo = () => { 
    return(
        <>
            <Container className="demo">
                <Row>
                    <Col className="no-padding" lg={4}>
                        <div className="demo__left">
                            <p className="demo__text text--uppercase">Schedule a demo</p>
                            <p className="demo__subtext">Learn More About FloQast.</p>
                        </div>
                    </Col>
                    <Col className="no-padding" lg={8}>
                        <div className="demo__right">
                            <form>
                                <h2 className="form__title">Learn How FloQast Can <span className="text--green">Improve your Month-End</span></h2>
                                <div className="form__container">
                                    <input className="form__input" placeholder="First Name*" />
                                    <input className="form__input" placeholder="Email*" />
                                    <button className="btn-main text--uppercase">Schedule now</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Demo;