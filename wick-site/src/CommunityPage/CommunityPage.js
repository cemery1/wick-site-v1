/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CommunityPage.js

    Top-Level Content for the Wick Gallery page
*/

import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import SectionContent from '../ContentComponents/SectionHeader/SectionContent.js';
import CommunityGalleryContainer from './CommunityGalleryContainer.js';

import '../scss_styles/CommunityPage.scss';

const CommunityPage = () => (
    <Container className="fadeIn animated">
        <SectionContent title="wick editor forum" includeUnderline>
            See what all the buzz is about and chat with fellow wick users for tips, tricks, and inspiration on your next project.
        </SectionContent>
        <Row className="CommunityPage-spacerRow" />
        <SectionContent title="creators" includeUnderline>
            Check out what people are making!
        </SectionContent>
        <Row id="CommunityPage-galleryContainer" className="CommunityPage-row">
            <Col sm="9" md="12" lg="9">
                <CommunityGalleryContainer />
            </Col>
        </Row>
    </Container>
);

export default CommunityPage;