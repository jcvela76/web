angular.module('MyApp')

.service('MathExpressions', function() {
	var self = this;

	self.calculateSum = function(arrayOfNumbers) {
		var count = 0;
		for (var i = 0; i < arrayOfNumbers.length; i++) {
			count += arrayOfNumbers[i];
		}

		return count;
	};
})

.factory('Car', function() {

	var carColor = 'Red'

	function Car(make, model) {
		this.make = make;
		this.model = model;
		this.year = null;
		this.age = null;
		this.color = 'red'
		this.owners = [];
	}

	Car.prototype.updateYear = function(newYear) {
		if (newYear && newYear > 999) {
		  this.age = 2015 - newYear;
		} else {
		  this.age = '';
		}
	};

	Car.prototype.getColor = function() {
		return this.color;
	};

	Car.prototype.setColor = function(color) {
		this.color = color;
	};

	return Car;
})

.value('MY_PASSWORD', 'JELLO24')

.value('MY_FOLDERS', [{
  name: 'Folder1'
}, {
  name: 'Folder2'
}, {
  name: 'Folder3'
}])