<template>
	<form class="text-left">
		<!-- "Which Crypto?" dropdown -->
		<div class="form-group">
			<label for="which-crypto" class="col-form-label">Which Crypto?</label>
			<select id="which-crypto" class="form-control">
				<option value disabled selected>-</option>
				<option>Bitcoin - #1</option>
				<option>Litecoin - The silver to Bitcoin's gold</option>
				<option>Zcash - Anonymous crypto</option>
			</select>
		</div>
		<div class="form-group">
			<label for="name" class="col-form-label">
				Name:
				<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
			</label>
			<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
		</div>
		<div class="form-group">
			<label for="description" class="col-form-label">Description:</label>
			<input type="text" class="form-control" id="description" />
		</div>
		<div class="form-group">
			<label for="img" class="col-form-label">Image URL (Web Address):</label>
			<input type="text" class="form-control" id="img" />
		</div>
		<div class="form-group">
			<label for="notes" class="col-form-label">Notes:</label>
			<input type="text" class="form-control" id="notes" />
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
		<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
	</form>
</template>

<script>
export default {
	name: "editCryptoForm"
};
</script>