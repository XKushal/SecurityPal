import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Container, Row, Col, Form, FormGroup, Button, Badge } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Section extends Component {
	constructor() {
		super();
		this.state = {
			email: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		console.log('change: ' + e.target.value);
		this.setState({
			email: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		window.location.href =
			'https://securitypal.typeform.com/to/yDUs8y?fbclid=IwAR2Jm8k_RqBNu1rxLE9bVERq2n575L8Em79tTyaHCfeUL5siiEKK1PS0lYU';
		console.log('Email: ' + this.state.email);
		let templateParams = {
			from_name: this.state.email,
			to_name: 'Kshitiz',
			subject: 'A demo Request',
			message_html: 'Can I get a demo request'
		};

		emailjs.send('kshitiz', 'template_870uPSWP', templateParams, 'user_ktaWZiDx892ZJ1TCTGYjB');
	}
	render() {
		return (
			<React.Fragment>
				<section className="bg-half-170 bg-light d-table w-100">
					<Container>
						<Row className="justify-content-center">
							<Col lg="10">
								<div className="title-heading text-center mt-5 pt-3">
									{/* <div className="alert alert-light alert-pills" role="alert" data-aos="fade-up" data-aos-duration="1000">
                                        {/* <Badge color="success" className="rounded mr-1">Support</Badge> */}
									{/* <span className="content"> Customer Support 24/7</span> */}
									{/* </div> */}
									<h1 className="heading mb-3" data-aos="fade-up" data-aos-duration="1400">
										Automate Vendor Security Reviews & Questionares
									</h1>
									<p
										className="para-desc mx-auto text-muted"
										data-aos="fade-up"
										data-aos-duration="1800"
									>
										Infosec & vendor questionares occupy a disproportionate amount of time for
										Sales, Security, and Engineering leaders. SecurityPal helps you put this on
										auto-pilot.
									</p>
									<div
										className="subcribe-form mt-4 pt-2"
										data-aos="fade-up"
										data-aos-duration="2200"
									>
										<Form onSubmit={this.handleSubmit}>
											<FormGroup className="mb-0">
												<input
													type="text"
													name="email"
													value={this.state.email}
													className="border bg-white rounded-pill shadow"
													required
													placeholder="Enter your email"
													onChange={this.handleChange}
												/>
												<Button type="submit" color="primary" className="btn-pills">
													Request Info
												</Button>
											</FormGroup>
										</Form>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</React.Fragment>
		);
	}
}

export default Section;
