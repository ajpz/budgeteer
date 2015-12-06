$(document).ready(function() {

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var john_debit = {
    Online Services: [{
        sum: 900,
        numberOfTrans: 9
      }],
      ATM / Cash Withdrawals: [{
        sum: 45001.62,
        numberOfTrans: 9
      }],
      Loans: [{
        sum: 1800,
        numberOfTrans: 9
      }],
      Rent: [{
        sum: 9000,
        numberOfTrans: 9
      }],
      Gasoline / Fuel: [{
        sum: 5381.700000000002,
        numberOfTrans: 17
      }],
      Restaurants / Dining: [{
        sum: 503.67999999999995,
        numberOfTrans: 16
      }],
      Other Bills: [{
        sum: 18611.620000000003,
        numberOfTrans: 17
      }],
      Service Charges / Fees: [{
        sum: 989,
        numberOfTrans: 17
      }],
      General Merchandise: [{
        sum: 10444.88,
        numberOfTrans: 24
      }],
      Entertainment: [{
        sum: 808.56,
        numberOfTrans: 8
      }],
      Home Improvement: [{
        sum: 20000,
        numberOfTrans: 8
      }]
  }





  var ctx = $("#mycanvas").get(0).getContext("2d");

  var john_debit = [{
    value: 900,
    color: "cornflowerblue",
    highlight: "lightskyblue",
    label: "JavaScript"
  }, {
    value: 45001.62,
    color: "lightgreen",
    highlight: "yellowgreen",
    label: "HTML"
  }, {
    value: 1800,
    color: "orange",
    highlight: "darkorange",
    label: "CSS"
  }, {
		value: 9000,
		color: "red",
		highlight: "darkred",
		label: "CSS"
	}, {
		value: 5381.700000000002,
		color: "lightblue",
		highlight: "blue",
		label: "CSS"
	}, {
		value: 503.67999999999995,
		color: "green",
		highlight: "darkgreen",
		label: "CSS"
	}, {
		value: 18611.620000000003,
		color: "orange",
		highlight: "darkorange",
		label: "CSS"
	}, {
		value: 989,
		color: "orange",
		highlight: "darkorange",
		label: "CSS"
	}, {
		value: 10444.88,
		color: "orange",
		highlight: "darkorange",
		label: "CSS"
	}, {
		value: 808.56,
		color: "orange",
		highlight: "darkorange",
		label: "CSS"
	}, {
		value: 20000,
		color: "orange",
		highlight: "darkorange",
		label: "CSS"
	}];

  var chart = new Chart(ctx).Doughnut(john_debit);
});
