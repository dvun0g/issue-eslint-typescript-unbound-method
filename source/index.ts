const object = {
	val: 1,
	method: function () {
		console.log(this?.val);
	},
};

class Class {
	val = 1;
	method = function () {
		console.log(this?.val);
	};
}

object.method(); // 1 | Not Error

const testUnboundFunctions = function (func) {
	func();
};

const { method: method1 } = object;
testUnboundFunctions(method1); // undefined | Not Error
testUnboundFunctions(object.method); // undefined | Not Error

const { method: method2 } = new Class();
testUnboundFunctions(method2); // undefined | Error
testUnboundFunctions(new Class().method); // undefined | Error
