/**
 * External dependencies
 */
import classNames from 'classnames';
import React from 'react';

const CheckoutThankYouHeader = React.createClass( {
	propTypes: {
		isDataLoaded: React.PropTypes.bool.isRequired,
		isFreeTrial: React.PropTypes.bool,
		primaryPurchase: React.PropTypes.object,
		selectedSite: React.PropTypes.object
	},

	renderHeading() {
		if ( ! this.props.isDataLoaded ) {
			return this.translate( 'Loading…' );
		}

		if ( this.props.isFreeTrial ) {
			return this.translate( 'Way to go, your 14 day free trial starts now!' );
		}

		return this.translate( 'Thank you for your purchase!' );
	},

	renderText() {
		if ( ! this.props.isDataLoaded ) {
			return this.translate( 'Loading…' );
		}

		if ( this.props.isFreeTrial ) {
			return this.translate( "We hope you enjoy %(productName)s. What's next? Take it for a spin!", {
				args: {
					productName: this.props.primaryPurchase.productShort
				}
			} );
		}

		if ( this.props.primaryPurchase ) {
			return this.translate(
				"You will receive an email confirmation shortly for your purchase of %(productName)s. What's next?", {
					args: {
						productName: this.props.primaryPurchase.productName
					}
				}
			);
		}

		return this.translate( "You will receive an email confirmation shortly. What's next?" );
	},

	render() {
		const classes = {
			'checkout-thank-you-header': true,
			'is-placeholder': ! this.props.isDataLoaded
		}
		return (
			<div className={ classNames( classes ) }>
				<span className="checkout-thank-you-header__icon"/>
				<h1 className="checkout-thank-you-header__heading">
					{ this.renderHeading() }
				</h1>
				<h2 className="checkout-thank-you-header__text">
					{ this.renderText() }
				</h2>
			</div>
		);
	}
} );

export default CheckoutThankYouHeader;
