import ButtonReducer from "../../app/js/reducers/ButtonReducer";
import { toggleButton, incrementValue } from "../../app/js/action-creators";

import chai from "chai"
const expect = chai.expect;


describe("ButtonReducer", () => {
	it("should toggle buttons", () => {
		const oldState = {
			buttons: {
				mine: false,
				yours: true
			}
		};

		const result = ButtonReducer(oldState, toggleButton("mine"));

		expect(result).to.deep.equal({
			mine: true,
			yours: true
		});
	});


	it("should increment button value on clicks", () => {
		const oldState = {
			buttons: {
				mine: 1,
				yours: 3
			}
		};

		const result = ButtonReducer(oldState, incrementValue("mine"));

		expect(result).to.deep.equal({
			mine: 2,
			yours: 3
		});
	});

	it("should wrap button value after 4", () => {
		const oldState = {
			buttons: {
				mine: 4,
				yours: 3
			}
		};

		const result = ButtonReducer(oldState, incrementValue("mine"));

		expect(result).to.deep.equal({
			mine: 1,
			yours: 3
		});
	});
})