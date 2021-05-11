import React from 'react'
import Slider from 'react-slick'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import {baseTitle, sliderSettingsOne, sliderSettingsThree} from './Helper'

export default function Homepage() {
	document.title = baseTitle + ' - Homepage'
	const options = [
		{value: 'Specialty 1', label: 'Specialty 1'},
		{value: 'Specialty 2', label: 'Specialty 2'}
	]

	return (
		<React.Fragment>
			<div className="homepage">
				<section className="main">
					<div className="wrapper">
						<div className="main-info">
							<h1 className="main-title">We educate your patients & generate profit for you!</h1>
							<p>Cut your cable bill & employ our specialty specific health programing to engage your patients as they
								wait for consultation. </p>
							<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
						</div>
						<div className="main-img"><img src="img/main/hero.png" alt=""/></div>
					</div>
				</section>
				<section className="info">
					<div className="info-block info-1">
						<div className="wrapper">
							<div className="info-top">
								<h2 className="section-title">Waiting Time is Wasted Time</h2>
								<img src="img/info/img-1-min.png" alt=""/>
							</div>
							<div className="info-row">
								<div className="info-col">
									<p>Frustrated patients often don't complain, they just leave and in many cases take your reputation
										with them.</p>
									<p>The risk of not engaging patients in the waiting area can be detrimental to the success of a
										practice.</p>
									<p>An unengaged wait can result in:</p>
								</div>
								<div className="info-col">
									<ul>
										<li><span>Brand reputation damage</span></li>
										<li><span>Declining Revenues</span></li>
										<li><span>Loss of Patients</span></li>
										<li><span>Undermining of your Authority</span></li>
										<li><span>Patient Frustration</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="info-block info-2">
						<div className="wrapper">
							<div className="info-top">
								<h2 className="section-title">Let's change that.</h2>
								<img src="img/info/img-2-min.png" alt=""/>
							</div>
							<div className="info-row">
								<div className="info-col">
									<p>Imagine—a service that results in fewer frustrations, more focus in consultation, and better
										outcomes with your patients while generating passive income for you.</p>
								</div>
								<div className="info-col">
									<p>Buzz Fit streaming service reliably delivers relevant and impactful video to your waiting
										patients in the highest quality with access video experience insights</p>
								</div>
							</div>
							<div className="info-button">
								<Link to="/order" className="primary-btn primary-btn-yellow">Get your TV Box Now</Link>
							</div>
						</div>
					</div>
					<div className="info-block info-3">
						<div className="wrapper">
							<div className="info-row">
								<div className="info-col">
									<img src="img/info/img-3-min.png" alt=""/>
								</div>
								<div className="info-col">
									<h2 className="section-title">Increase Patients Satisfaction</h2>
									<div className="info-text">
										<p>People frustrated with wait times speak poorly about you and your business.</p>
										<p>Transform frustrating wait times into entertaining and educational experiences that improve
											your brand.</p>
									</div>
									<div className="info-button">
										<Link to="/order" className="primary-btn primary-btn-peach">Get your TV Box Now</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="info-block info-4">
						<div className="wrapper">
							<div className="info-row">
								<div className="info-col">
									<h2 className="section-title">Patient Retention</h2>
									<div className="info-text">
										<p>Your biggest loss of revenue is patient churn, costing you 30% of your patient roster
											annually.</p>
										<p>92% of this loss is a result of protracted wait times. Buzz Fit reduces perceived waiting
											times by half.</p>
									</div>
									<div className="info-button">
										<Link to="/order" className="primary-btn primary-btn-yellow">Get your TV Box Now</Link>
									</div>
								</div>
								<div className="info-col info-col__img">
									<img src="img/info/img-4-min.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
					<div className="info-block info-5">
						<div className="wrapper">
							<div className="info-row">
								<div className="info-col info-col__1">
									<img src="img/info/img-5-min.png" alt=""/>
								</div>
								<div className="info-col info-col__2">
									<h2 className="section-title">Request for Service</h2>
									<div className="info-text">
										<p>Our content is designed to entertain and address the most frequently asked questions,
											increase requests for service driving the profitability and efficiency of your business.</p>
									</div>
									<div className="info-buttons">
										<Link to="/order" className="primary-btn primary-btn-purple">Get your TV Box Now</Link>
										<Link to="#cost" className="info-link">
											<i className="hb-ico play-ico"/>
											Cost of getting it wrong
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="info-block info-6">
						<div className="info-bg info-bg__1"><img src="img/info/img-6-1-min.png" alt=""/></div>
						<div className="info-bg info-bg__2"><img src="img/info/img-6-2-min.png" alt=""/></div>
						<div className="wrapper">
							<div className="info-row">
								<div className="info-col">
									<h2 className="section-title">Save up to $1000 per year by cutting your cable</h2>
									<div className="info-text">
										<p>99% of practices are paying for cable TV that does not entertain and engage the majority of
											their patients.</p>
										<p>Turn your cost to profit. View our cable cost comparison</p>
									</div>
									<div className="info-buttons">
										<Link to="/order" className="primary-btn primary-btn-yellow">Get your TV Box Now</Link>
										<Link to="#compare" className="info-link">
											<i className="hb-ico play-ico-yellow"/>
											See how we compare
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="testimonials">
					<div className="wrapper">
						<div className="testimonials-row">
							<div className="testimonials-col">
								<div className="testimonials-info">
									<h2 className="section-title">Start Generating Your Passive Income</h2>
									<p>You have the audience, we have the content and we split the profit with you.</p>
									<p>Not only do you pay for cable, but the TV channel playing in your waiting room is also profiting
										directly from the advertising your Patients watch.</p>
									<div className="info-buttons">
										<Link to="/order" className="primary-btn primary-btn-purple">Get your TV Box Now</Link>
										<Link to="#calculate" className="info-link">
											<i className="hb-ico play-ico"/>
											Calculate your savings
										</Link>
									</div>
								</div>
							</div>
							<div className="testimonials-col testimonials-col__2">
								<div className="testimonials-slider">
									<Slider {...sliderSettingsOne}>
										<div className="testimonials-slide">
											<div className="testimonials-desc">
												<p>“When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to
													work again if I don’t want to.</p>
												<span>- Don McLean</span>
											</div>
											<div className="testimonials-human">
												<img src="img/testimonials/user-1-min.png" alt=""/>
											</div>
											<span className="testimonials-position">American singer-songwriter</span>
										</div>
										<div className="testimonials-slide">
											<div className="testimonials-desc">
												<p>“When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to
													work again if I don’t want to.</p>
												<span>- Don McLean</span>
											</div>
											<div className="testimonials-human">
												<img src="img/testimonials/user-1-min.png" alt=""/>
											</div>
											<span className="testimonials-position">American singer-songwriter</span>
										</div>
										<div className="testimonials-slide">
											<div className="testimonials-desc">
												<p>“When people ask me what ‘American Pie’ means, I tell them it means I don’t ever have to
													work again if I don’t want to.</p>
												<span>- Don McLean</span>
											</div>
											<div className="testimonials-human">
												<img src="img/testimonials/user-1-min.png" alt=""/>
											</div>
											<span className="testimonials-position">American singer-songwriter</span>
										</div>
									</Slider>
								</div>
								<div className="testimonials-mob">
									<div className="info-buttons">
										<Link to="/order" className="primary-btn primary-btn-purple">Get your TV Box Now</Link>
										<Link to="#calculate" className="info-link">
											<i className="hb-ico play-ico"/>
											Calculate your savings
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="steps steps-second">
					<div className="wrapper">
						<h2 className="section-title">Success Simplified!</h2>
						<div className="steps-row">
							<Slider {...sliderSettingsThree}>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/01c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Subscribe</h3>
										<p>Subscribe - $199 refundable deposit</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/03c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Receive</h3>
										<p>We’ll send your box within 7 business days</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/02c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Enjoy</h3>
										<p>You will be up and running in 2 minutes, track your revenue and progress in the physician
											app.</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</section>
				<section className="begin">
					<div className="wrapper">
						<div className="begin-row">
							<div className="begin-img">
								<img src="img/begin/juggling-2-min.png" alt=""/>
							</div>
							<div className="begin-info">
								<h2 className="section-title">Being a doctor today is tough!</h2>
								<p>It’s easy to get frustrated and overwhelmed and to feel guilty for not having time for your patients.
									With an ever-increasing workload, trying to juggle the responsibilities of running a business &
									caring for patients is difficult.</p>
								<span className="begin-subtitle">Don't fret, we've got your back! You will never have to worry again about consumer experience in your practice.</span>
								<Link to="/order" className="primary-btn primary-btn-blue">Get your TV Box Now</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="actions">
					<div className="wrapper">
						<div className="actions-top">
							<span className="section-subtitle">VIDEOS</span>
							<h2 className="section-title">Buzz Fit in action</h2>
							<p>Buzz Fit focuses on delivering simple healthcare messaging</p>
						</div>
						<div className="actions-slider">
							<Slider {...sliderSettingsThree}>
								<div className="actions-slide">
									<div className="actions-video">
										<i className="hb-ico play-ico-big"/>
									</div>
								</div>
								<div className="actions-slide">
									<div className="actions-video">
										<i className="hb-ico play-ico-big"/>
									</div>
								</div>
								<div className="actions-slide">
									<div className="actions-video">
										<i className="hb-ico play-ico-big"/>
									</div>
								</div>
								<div className="actions-slide">
									<div className="actions-video">
										<i className="hb-ico play-ico-big"/>
									</div>
								</div>
								<div className="actions-slide">
									<div className="actions-video">
										<i className="hb-ico play-ico-big"/>
									</div>
								</div>
							</Slider>
						</div>
						<div className="actions-bottom">
							<p>More videos available on our content page</p>
							<Link to="/content" className="primary-btn primary-btn-blue">see our content</Link>
						</div>
					</div>
				</section>
				<section className="pricing" id="compare">
					<div className="wrapper">
						<div className="pricing-top">
							<span className="section-subtitle">pricing</span>
							<h2 className="section-title">Cut the cord & start saving today</h2>
						</div>
						<div className="pricing-mob">
							<p>Compare us now</p>
							<ul>
								<li><Link to="#">AT&t</Link></li>
								<li><Link to="#" className="active">VERIZON</Link></li>
								<li><Link to="#">DISH</Link></li>
							</ul>
						</div>
						<div className="pricing-table">
							<div className="pricing-col pricing-col__1">
								<div className="pricing-item pricing-item__1"/>
								<div className="pricing-item pricing-item__2">Device</div>
								<div className="pricing-item pricing-item__3">Installation</div>
								<div className="pricing-item pricing-item__4">Activation</div>
								<div className="pricing-item pricing-item__5">Relevant content to whole Audience</div>
								<div className="pricing-item pricing-item__6">Passive income</div>
								<div className="pricing-item pricing-item__7">Ongoing cost per year</div>
								<div className="pricing-item pricing-item__8">
									Total cost
									<div className="tooltip">
										<i className="hb-ico i-ico-big"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
							</div>
							<div className="pricing-col pricing-col__2">
								<div className="pricing-item pricing-item__1">
									<img src="img/logo-mob.svg" alt=""/>
								</div>
								<div className="pricing-item pricing-item__2">refundable deposit</div>
								<div className="pricing-item pricing-item__3">
									Free
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__4">Free</div>
								<div className="pricing-item pricing-item__5">
									Yes
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__6">
									Yes
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__7">$0</div>
								<div className="pricing-item pricing-item__8">
									<span className="pricing-title">YOU EARN PASSIVE INCOME</span>
									<Link to="#calculate">Calculate your potential savings</Link>
								</div>
							</div>
							<div className="pricing-col pricing-col__3">
								<div className="pricing-item pricing-item__1"><img src="img/pricing/logo-2-min.png" alt=""/></div>
								<div className="pricing-item pricing-item__2">$299.00</div>
								<div className="pricing-item pricing-item__3">$99.00</div>
								<div className="pricing-item pricing-item__4">$89.00</div>
								<div className="pricing-item pricing-item__5">No</div>
								<div className="pricing-item pricing-item__6">No</div>
								<div className="pricing-item pricing-item__7">
									$359.88 /per year
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__8">$846.88</div>
							</div>
							<div className="pricing-col pricing-col__4">
								<div className="pricing-item pricing-item__1"><img src="img/pricing/logo-3-min.png" alt=""/></div>
								<div className="pricing-item pricing-item__2">$Unknown</div>
								<div className="pricing-item pricing-item__3">
									$49.00
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__4">
									$19.00
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__5">No</div>
								<div className="pricing-item pricing-item__6">No</div>
								<div className="pricing-item pricing-item__7">
									$839.88 /per year
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__8">$907.88</div>
							</div>
							<div className="pricing-col pricing-col__5">
								<div className="pricing-item pricing-item__1"><img src="img/pricing/logo-4-min.png" alt=""/></div>
								<div className="pricing-item pricing-item__2">
									$10.00
									<div className="tooltip">
										<i className="hb-ico i-ico"/>
										<div className="tooltip-info">Price details based on smallest available cable service Jan 2021</div>
									</div>
								</div>
								<div className="pricing-item pricing-item__3">Appointment required</div>
								<div className="pricing-item pricing-item__4">$0.00</div>
								<div className="pricing-item pricing-item__5">No</div>
								<div className="pricing-item pricing-item__6">No</div>
								<div className="pricing-item pricing-item__7">$799.88 /per year</div>
								<div className="pricing-item pricing-item__8">$789.88</div>
							</div>
						</div>
						<div className="pricing-mob">
							<p>Compare us now</p>
							<ul>
								<li><Link to="#">AT&t</Link></li>
								<li><Link to="#" className="active">VERIZON</Link></li>
								<li><Link to="#">DISH</Link></li>
							</ul>
							<Link to="#calculate" className="pricing-mob__link">Calculate your potential savings</Link>
						</div>
						<div className="pricing-bottom">
							<Link to="/order" className="primary-btn primary-btn-purple">Get your TV Box Now</Link>
							<p>For only a one time refundable deposit of $199.00</p>
						</div>
					</div>
				</section>
				<section className="calculate" id="calculate">
					<div className="wrapper">
						<div className="calculate-row">
							<div className="calculate-col calculate-col__1">
								<span className="section-subtitle">Your savings</span>
								<h2 className="section-title">Calculate your potential operational savings</h2>
								<div className="calculate-img">
									<img src="img/main/think.png" alt=""/>
								</div>
							</div>
							<div className="calculate-col calculate-col__2">
								<div className="calculate-info">
									<p>With only basic information about your practice, our calculator will estimate what your potential
										savings will be. </p>
									<p>We provide a full breakdown of the calculation, built on data from trusted brands in the
										healthcare industry and supported by an independently research white paper included in your
										report.</p>
								</div>
								<div className="calculate-form">
									<h3 className="calculate-title">Enter your details</h3>
									<form action="">
										<div className="input-block">
											<Select
												placeholder="Specialty"
												options={options}
												value={options[2]}
												classNamePrefix="calculator"
												onChange={e => console.log( e )}
											/>
										</div>
										<div className="input-row">
											<div className="input-col">
												<div className="input-block">
													<input type="text" name="text" placeholder="Patients per week"/>
												</div>
											</div>
											<div className="input-col">
												<div className="input-block">
													<input type="text" name="text" placeholder="Weeks per year"/>
												</div>
											</div>
										</div>
										<div className="input-block">
											<input type="email" name="email" placeholder="Your email address"/>
										</div>
										<Link to="/calculator" className="primary-btn">calculate</Link>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="industry">
					<div className="wrapper">
						<div className="industry-top">
							<span className="section-subtitle">What People Say</span>
							<h2 className="section-title">Industry Leaders</h2>
						</div>
						<div className="industry-slider">
							<Slider {...sliderSettingsOne}>
								<div className="industry-slide">
									<div className="industry-wrap">
										<p>“Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
											organization, so collaboration is easy.”</p>
									</div>
									<img className="industry-logo" src="img/industry/img-1.svg" alt=""/>
								</div>
								<div className="industry-slide">
									<div className="industry-wrap">
										<p>“Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
											organization, so collaboration is easy.”</p>
									</div>
									<img className="industry-logo" src="img/industry/img-2.svg" alt=""/>
								</div>
								<div className="industry-slide">
									<div className="industry-wrap">
										<p>“Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
											organization, so collaboration is easy.”</p>
									</div>
									<img className="industry-logo" src="img/industry/img-3.svg" alt=""/>
								</div>
								<div className="industry-slide">
									<div className="industry-wrap">
										<p>“Buzz Fit is very useful. Videos are always up to date. It’s easy to share contents across the
											organization, so collaboration is easy.”</p>
									</div>
									<img className="industry-logo" src="img/industry/img-1.svg" alt=""/>
								</div>
							</Slider>
						</div>
					</div>
				</section>
				<section className="result" id="cost">
					<div className="wrapper">
						<div className="result-top">
							<span className="section-subtitle">Result</span>
							<h2 className="section-title">The cost of getting it wrong</h2>
							<p>You invest serious time and money getting your healthcare consumers in the door. Every interaction with
								customers in your practice is an opportunity to up-sell*.</p>
						</div>
						<div className="result-img"><img src="img/result/wallet.png" alt=""/></div>
						<div className="result-bar">
							<span className="result-bar__num result-bar__num-1">0%</span>
							<span className="result-bar__num result-bar__num-2">50%</span>
							<span className="result-bar__num result-bar__num-3">100%</span>
							<span className="result-bar__num result-bar__num-4">150%</span>
							<span className="result-bar__num result-bar__num-5">200%</span>
							<div className="result-bar__row">
								<div className="result-bar__item result-bar__item-1">Increase in gross sales</div>
								<div className="result-bar__item result-bar__item-2">22%</div>
							</div>
							<div className="result-bar__row">
								<div className="result-bar__item result-bar__item-1">Revenue upsell generated</div>
								<div className="result-bar__item result-bar__item-2">Up to 51%</div>
							</div>
							<div className="result-bar__row">
								<div className="result-bar__item result-bar__item-1">Increase in consultation revenue</div>
								<div className="result-bar__item result-bar__item-2">Up to 85%</div>
							</div>
							<div className="result-bar__bottom">
								<span>Before Buzz Fit</span>
								<span>After Buzz Fit</span>
							</div>
						</div>
						<div className="result-wrap">
							<h3 className="result-title">What’s stopping you?</h3>
							<p>Buzz Fit is a risk free money back guarantee service, sign up today!</p>
							<Link to="/order" className="primary-btn primary-btn-yellow">Get your TV Box Now</Link>
						</div>
						<div className="result-bottom">
							*Access the supporting research by <Link to="/#calculate"> calculating your savings now</Link>
							<i className="hb-ico play-ico-yellow"/>
						</div>
					</div>
				</section>
				<section className="guarantee">
					<div className="wrapper">
						<div className="guarantee-ico"><img src="img/icons/shield-ico.svg" alt=""/></div>
						<span className="section-subtitle">What People Say</span>
						<h2 className="section-title">100% Risk Free!</h2>
						<p>100% Risk-Free, Money-back Guarantee. Our 100% risk-free, satisfaction guarantee, lasts 12 months days from
							the date you receive your device. If for any reason you are not completely satisfied with the product,
							simply send it back to us and we will return you 100% of your money back - no questions asked.</p>
						<div className="guarantee-button">
							<div className="guarantee-button__wrap">
								<Link to="/order" className="primary-btn primary-btn-peach">Get your TV Box Now</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="steps steps-second">
					<div className="wrapper">
						<h2 className="section-title">Success Simplified!</h2>
						<div className="steps-row">
							<Slider {...sliderSettingsThree}>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/01c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Subscribe</h3>
										<p>Subscribe - $199 refundable deposit</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/03c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Receive</h3>
										<p>We’ll send your box within 7 business days</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
								<div className="steps-col">
									<div className="steps-wrap">
										<div className="steps-img">
											<div className="steps-img__wrap">
												<img src="img/02c.gif" alt=""/>
											</div>
										</div>
										<h3 className="steps-title">Enjoy</h3>
										<p>You will be up and running in 2 minutes, track your revenue and progress in the physician
											app.</p>
										<Link to="/order" className="primary-btn">Get your TV Box Now</Link>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	)
}