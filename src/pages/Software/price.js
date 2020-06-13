import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Pricing from "../../components/Shared/pricing-box";

class Price extends Component {
    state = {
        pricings : [
            { id : 1, title : "Free", price : 0, duration : "mo", buttonText: "Buy Now", btnLink: "",
                features : [
                    {title : "Full Access"},
                    {title : "Source Files"},
                ]
            },
            { id : 2, title : "Starter", price : 39, duration : "mo", buttonText: "Get Started", btnLink: "", isActive : true,
                features : [
                    {title : "Full Access"},
                    {title : "Source Files"},
                    {title : "Free Appointments"},
                ]
            },
            { id : 3, title : "PROFESSIONAL", price : 59, duration : "mo", buttonText: "Try It Now", btnLink: "",
                features : [
                    {title : "Full Access"},
                    {title : "Source Files"},
                    {title : "1 Domain Free"},
                    {title : "Enhanced Security"},
                ]
            },
            { id : 4, title : "ULTIMATE", price : 79, duration : "mo", buttonText: "Started Now", btnLink: "",
                features : [
                    {title : "Full Access"},
                    {title : "Enhanced Security"},
                    {title : "Source Files"},
                    {title : "1 Domain Free"},
                    {title : "Free Installment"},
                ]
            }
        ],
    }
    render() {
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">
                {/* section title */}
                <SectionTitle title="Chose your perfect Plan" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                <Row>
                    {/* pricing */}
                    <Pricing pricings={this.state.pricings} />
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Price;