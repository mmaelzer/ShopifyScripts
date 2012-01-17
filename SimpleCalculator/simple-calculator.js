<div id="shipping_calculator">
    <h2>Shipping Calculator</h2>
	<div id="location_container">
		<select id="location_selector">
			<option>Domestic (Inside the U.S.)</option>
			<option>International (Outside the U.S.)</option>
		</select>
		<input type="button" id="location_button" value="Calculate" />
	</div>
	<h3>
		<span id="shipping_price"></span>
	</h3>
</div>

<script type="text/javascript">
$(document).ready(function() {
	$('#location_button').click(function() {
		updateShippingRate();
	});
});

function updateShippingRate()
{
	var shippingPrice = "";
	switch ($('#location_selector').val()) {
		case 'Domestic (Inside the U.S.)':
			shippingPrice = getDomesticRate($("#total > span").text().replace(new RegExp('$', 'g'), ''));
			break;
		case 'International (Outside the U.S.)':
			shippingPrice = getInternationalRate($("#total > span").text().replace(new RegExp('$', 'g'), ''));
			break;
		default:
			shippingPrice = "Select a location";
			break;
	}
	$("#shipping_price").text("Shipping: " + shippingPrice);
}

function getDomesticRate(cartTotal)
{
	if (cartTotal < 25) {
		return "$5.00";
	} else if (cartTotal < 50) {
		return "$7.50";
	} else if (cartTotal < 75) {
		return "$10.00";
	} else if ( cartTotal < 100) {
		return "$12.50";
	} else {
		return "Free";
	}
}

function getInternationalRate(cartTotal)
{
	if (cartTotal < 50) {
		return "$15.00";
	} else if (cartTotal < 200) {
		return "$50.00";
	} else if (cartTotal < 250) {
		return "$65.00";
	} else {
		return "$100.00";
	}
}
</script>