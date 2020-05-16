<template>
	<form class="text-left">
		<!-- "Which Metal?" dropdown -->
		<div class="form-group">
			<label for="which-metal" class="col-form-label">Which Metal?</label>
			<select id="which-metal" class="form-control">
				<option value disabled selected>-</option>
				<option>Gold - For saving</option>
				<option>Silver - For spending</option>
			</select>
		</div>
		<!-- Description -->
		<div class="form-group">
			<label for="description" class="col-form-label">Description:</label>
			<input type="text" class="form-control" id="description" />
		</div>
		<!-- Image -->
		<div class="form-group">
			<label for="img" class="col-form-label">Image URL (Web Address):</label>
			<input type="text" class="form-control" id="img" />
		</div>
		<!-- Notes -->
		<div class="form-group">
			<label for="notes" class="col-form-label">Notes:</label>
			<input type="text" class="form-control" id="notes" />
		</div>
		<!-- Buttons -->
		<button type="submit" class="btn btn-primary">Submit</button>
		<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
	</form>
</template>

<script>
export default {
	name: "editMetalForm"
};
</script>