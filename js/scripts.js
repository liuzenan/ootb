$(document).ready(function() {
	// body...

	var ctx = $("#chart-1").get(0).getContext("2d");
	//This will get the first returned node in the jQuery collection.
	var myNewChart = new Chart(ctx);

	var data = [
		{
			value: 30,
			color:"#F7464A"
		},
		{
			value : 50,
			color : "#E2EAE9"
		}
	];

	myNewChart.Doughnut(data);
	
});