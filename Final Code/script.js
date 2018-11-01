function getDonation(){

	var donations_text = document.getElementById('sum');
	var adding_text = document.getElementById('donation');

	var to_add = parseInt(donations_text.innerHTML);
	var total_sum = parseInt(adding_text.value);

	var sum = to_add + total_sum;

	donations_text.innerHTML = sum;
	adding_text.value = ""
}