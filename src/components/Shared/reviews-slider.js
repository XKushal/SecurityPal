import React, { Component } from 'react';
import { Media, Row, Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

class ReviewsSlider extends Component {
	state = {
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 1
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	};
	render() {
		return (
			<React.Fragment>
				<Row className="justify-content-center">
					<Col lg="12">
						<OwlCarousel className="owl-theme" items={2} loop margin={2} responsive={this.state.responsive}>
							{this.props.reviews.map((review, key) => (
								<Media className="customer-testi m-2" key={key} name="clientsreview">
									<Media className="p-3 shadow rounded bg-white position-relative" body>
										<StarRatings
											items={3}
											rating={review.rating}
											starRatedColor="#F17425"
											numberOfStars={5}
											name="rating"
											starDimension="15px"
										/>
										<p className="text-muted mt-2">" {review.desc} "</p>
										<h6 className="text-primary">
											- {review.name} <small className="text-muted">{review.post}</small>
										</h6>
									</Media>
								</Media>
							))}
						</OwlCarousel>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default ReviewsSlider;
