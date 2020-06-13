import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Containers
import SectionTitle from '../../components/Shared/section-title';
import ReviewsSlider from '../../components/Shared/reviews-slider';

//Import Images
// import img1 from '../../images/client/01.jpg';
// import img2 from '../../images/client/02.jpg';
// import img3 from '../../images/client/03.jpg';
// import img4 from '../../images/client/04.jpg';
// import img5 from '../../images/client/05.jpg';
// import img6 from '../../images/client/06.jpg';

class Reviews extends Component {
	state = {
		reviews: [
			{
				id: 1,
				name: 'Atrium',
				post: 'Founder',
				desc: 'SecurityPal is a massive timesaver. A total no-brainer for any sales or security organization.',
				rating: 5
			},
			{
				id: 2,
				name: 'Truework',
				post: 'Head of Security',
				desc:
					'I love your product...SecurityPal gives me much needed burst capacity so a deal never slows down for the sales team.',
				rating: 5
			},
			{
				id: 3,
				name: 'Figma',
				post: 'Director of Security',
				desc:
					"As a Security leader, SecurityPal is one of the best investments I have made. It's helped us ensure that we are spending our precious time improving the security of our product and organizations instead of filling out repetitive security review documents & questionnaires.",
				rating: 5
			},
			{
				id: 4,
				name: 'Tray.io',
				post: 'Senior Account Executive',
				desc:
					'Admitted, I was a bit skeptical about SecurityPal but you all are doing a fantastic job to quickly help us through these security reviews.',
				rating: 5
			},
			{
				id: 5,
				name: 'Airtable',
				post: 'Sales leader',
				desc:
					"We've been so, so pleasantly surprised as how large of a time-saving impact working with SecurityPal has been — our Sales Engineers now spend less than 5% of their time on security review related work (previously ranged between 15-30% depending on pipeline and deal stage), and now spend that time engaging with customers and selling teams. Pretty rare when something genuinely exceeds expectations, but this was the case.",
				rating: 5
			}
		]
	};

	render() {
		return (
			<React.Fragment>
				<Container className="mt-100 mt-60">
					{/* section title */}
					<SectionTitle title="Client Reviews" desc="" />

					{/* clients slider */}
					<ReviewsSlider reviews={this.state.reviews} />
				</Container>
			</React.Fragment>
		);
	}
}

export default Reviews;
