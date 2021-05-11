import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="arrow-up"><i className="hb-ico arrow-up-ico"/></div>
				<div className="footer-row">
					<div className="footer-col footer-col__1">
						<div className="footer-logo"><Link to="/"><img src="img/logo-2.svg" alt=""/></Link></div>
						<ul className="social">
							<li><Link to="/"><img src="img/social/inst.svg" alt=""/></Link></li>
							<li><Link to="/"><img src="img/social/twit.svg" alt=""/></Link></li>
						</ul>
						<p>Copyright © 2021 Buzz Fit</p>
					</div>
					<div className="footer-col footer-col__2">
						<span className="footer-subtitle">Company</span>
						<ul>
							<li><Link to="/about">About us</Link></li>
							<li><Link to="/how">How it works</Link></li>
							<li><Link to="/device">Device</Link></li>
							<li><Link to="/order">Buy now</Link></li>
						</ul>
					</div>
					<div className="footer-col footer-col__3">
						<span className="footer-subtitle">Support</span>
						<ul>
							<li><Link to="/faq">FAQ</Link></li>
							<li><Link to="/contact">Contact us</Link></li>
							<li><Link to="/terms">Terms & conditions</Link></li>
							<li><Link to="/privacy">Privacy policy</Link></li>
							<li><Link to="/billing">Billing policy</Link></li>
							<li><Link to="/delivery">Delivery policy</Link></li>
							<li><Link to="/refund">Refund policy</Link></li>
						</ul>
					</div>
					<div className="footer-col footer-col__4">
						<span className="footer-subtitle">Community</span>
						<ul>
							<li><Link to="/">Blog</Link></li>
							<li><Link to="/">Advertise with us</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}