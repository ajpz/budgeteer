$(document).ready(function() {

  var ctx = $("#mycanvas").get(0).getContext("2d");

  var john_debit = [{
    value: 900.00,
    color: "cornflowerblue",
    highlight: "lightskyblue",
    label: "Online Services"
  }, {
    value: 45001.62,
    color: "lightgreen",
    highlight: "yellowgreen",
    label: "ATM / Cash Withdrawals"
  }, {
    value: 1800,
    color: "orange",
    highlight: "darkorange",
    label: "Loans"
  }, {
		value: 9000,
		color: "red",
		highlight: "darkred",
		label: "Rent"
	}, {
		value: 5381.70,
		color: "lightblue",
		highlight: "blue",
		label: "Gasoline"
	}, {
		value: 503.68,
		color: "lightpink",
		highlight: "pink",
		label: "Restaurants"
	}, {
		value: 18611.62,
		color: "gray",
		highlight: "darkgray",
		label: "Other Bills"
	}, {
		value: 989,
		color: "tan",
		highlight: "brown",
		label: "Service Charges"
	}, {
		value: 10444.88,
		color: "violet",
		highlight: "purple",
		label: "General Merchandise"
	}, {
		value: 808.56,
		color: "turquoise",
		highlight: "lightgreen",
		label: "Entertainment"
	}, {
		value: 20000,
		color: "orange",
		highlight: "darkorange",
		label: "Home Improvement"
	}];

  var chart = new Chart(ctx).Doughnut(john_debit);
});
