import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import Logo from '../assets/images/floqast-logo.png'

const Tagline = () => {
    return(
        <>
            <Container fluid className="tagline">
                <Row>
                    <Col className="no-padding" lg={6}>
                        <div className="tagline__container">
                            <div className="inner">
                                <div className="tagline__top mb-1">
                                    <img className="tagline__img" src={Logo} alt="FloQast Logo" />
                                    <h1 className="title">The</h1>
                                </div>
                                <div className="tagline__middle mb-1">
                                    <h1 className="title--big text--green">Fastest, Most Accurate</h1>
                                </div>
                                <div className="tagline__bottom">
                                    <h1 className="title">Way to Close Your Books!</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Tagline;