// Extend the HTMLElement class to create the web component
class GreetingMessage extends HTMLElement {

	/**
	 * The class constructor object
	 */
	constructor () {

		// Always call super first in constructor
		super();

		console.log('Constructed', this);



  	// Render HTML
	  this.innerHTML =
		  `<p>
			  <button>Hi there!</button>
		  </p>
		  <div class="message" aria-live="polite"></div>`;

	}

	/**
	 * Runs each time the element is appended to or moved in the DOM
	 */
	connectedCallback () {
		console.log('connected!', this);
	}

	/**
	 * Runs when the element is removed from the DOM
	 */
	disconnectedCallback () {
		console.log('disconnected', this);
	}

}