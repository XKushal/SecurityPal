import React, { Component } from 'react';

//Import AOS animation
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

//Import Components
import Section from './section';
import Features from './features';
import Support from './support';
import Reviews from './reviews';
import Ticket from './ticket';
import { Row, Col } from 'reactstrap';

class Customer extends Component {
	constructor(props, context) {
		super(props, context);
		//Initilize Aos Animation
		AOS.init();
	}

	componentDidMount() {
		//Refresh Aos Animation whenever components will render
		AOS.refresh();

		document.body.classList = '';
		document.getElementById('topnav').classList.add('bg-white');
		window.addEventListener('scroll', this.scrollNavigation, true);

		//set AOS atttributes to section title and desc
		var elementsTitle = document.getElementsByName('sectiontitle');
		var elementsDesc = document.getElementsByName('sectiondesc');
		for (var i = 0; i < elementsTitle.length; i++) {
			elementsTitle[i].setAttribute('data-aos', 'fade-up');
			elementsTitle[i].setAttribute('data-aos-duration', '1200');
			elementsDesc[i].setAttribute('data-aos', 'fade-up');
			elementsDesc[i].setAttribute('data-aos-duration', '1000');
		}

		//set AOS atttributes to slider <Media> tags
		var elements = document.getElementsByName('clientsreview');
		for (var j = 0; j < elements.length; j++) {
			elements[j].setAttribute('data-aos', 'fade-up');
			elements[j].setAttribute('data-aos-duration', '1600');
		}

		//set AOS atttributes to footer
		var footer = document.getElementsByName('footercolumn');
		for (var fcol = 0; fcol < footer.length; fcol++) {
			footer[fcol].setAttribute('data-aos', 'fade-up');
			footer[fcol].setAttribute('data-aos-duration', '1400');
		}
	}

	// Make sure to remove the DOM listener when the component is unmounted.
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollNavigation, true);
	}

	scrollNavigation = () => {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		if (top > 80) {
			document.getElementById('topnav').classList.add('nav-sticky');
		} else {
			document.getElementById('topnav').classList.remove('nav-sticky');
		}
	};

	render() {
		return (
			<React.Fragment>
				{/* section */}
				<Section />

				<section className="section">
					{/* fratures */}
					{/* <Features /> */}

					{/* support */}
					{/* <Support /> */}

					{/* Review */}
					<Reviews />

					<React.Fragment>
						<Row className={this.props.isLeft ? '' : 'justify-content-center'}>
							<Col xs="12" className={this.props.isLeft ? '' : 'text-center'}>
								<div className="section-title mb-4 pb-2" name="maintitle">
									<h4 className="title mb-4" name="sectiontitle">
										{' '}
										{this.props.title}{' '}
									</h4>
									<p
										// style={'font: italics'}
										className={
											this.props.isLeft ? (
												'text-muted para-desc mb-0 '
											) : (
												'text-muted para-desc mx-auto mb-0'
											)
										}
										name="sectiondesc"
									>
										<i>
											We take the privacy and security needs of our customers very seriously hence
											we have blurred the logos. Feel free to reach out to us if you would like to
											be directly connected to SecurityPal user
										</i>
									</p>
								</div>
							</Col>
						</Row>
					</React.Fragment>
				</section>
			</React.Fragment>
		);
	}
}

export default Customer;
