/* generated by Svelte vX.Y.Z */
import { addListener, append, assign, createElement, createText, detachNode, init, insert, noop, proto, removeListener } from "svelte/shared.js";

var methods = {
	handleTouchstart() {
		// ...
	},

	handleClick() {
		// ...
	}
};

function create_main_fragment(component, ctx) {
	var div, button0, text1, button1, text3, button2;

	function click_handler(event) {
		event.preventDefault();
		event.stopPropagation();
		component.handleClick();
	}

	function click_handler_1(event) {
		component.handleClick();
	}

	function click_handler_2(event) {
		component.handleClick();
	}

	function touchstart_handler(event) {
		component.handleTouchstart();
	}

	return {
		c() {
			div = createElement("div");
			button0 = createElement("button");
			button0.textContent = "click me";
			text1 = createText("\n\t");
			button1 = createElement("button");
			button1.textContent = "or me";
			text3 = createText("\n\t");
			button2 = createElement("button");
			button2.textContent = "or me!";
			addListener(button0, "click", click_handler);
			addListener(button1, "click", click_handler_1, { once: true, capture: true });
			addListener(button2, "click", click_handler_2, true);
			addListener(div, "touchstart", touchstart_handler, { passive: true });
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, button0);
			append(div, text1);
			append(div, button1);
			append(div, text3);
			append(div, button2);
		},

		p: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}

			removeListener(button0, "click", click_handler);
			removeListener(button1, "click", click_handler_1, { once: true, capture: true });
			removeListener(button2, "click", click_handler_2, true);
			removeListener(div, "touchstart", touchstart_handler, { passive: true });
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
assign(SvelteComponent.prototype, methods);
export default SvelteComponent;