<template>
	<form @submit.prevent="createMetal" class="text-left">
		<!-- Metal type -->
		<div class="form-group">
			<input type="radio" v-model="newMetal.name" id="gold" name="type" value="Gold" required />
			<label for="gold">Gold</label>
			<input type="radio" v-model="newMetal.name" id="silver" name="type" value="Silver" />
			<label for="silver">Silver</label>
		</div>
		<!-- Measurement type -->
		<div class="form-group">
			<label for="measurement-type" class="col-form-label">Measurement Type:</label>
			<select v-model="newMetal.measurement" class="form-control" id="measurement-type" required>
				<!-- Placeholder -->
				<option value disabled selected>-</option>
				<!-- Options -->
				<option>Grams</option>
				<option>Kilos</option>
				<option>Troy Ounces</option>
			</select>
		</div>
		<!-- Description -->
		<div class="form-group">
			<label for="description" class="col-form-label">Description:</label>
			<input
				type="text"
				v-model="newMetal.description"
				class="form-control"
				id="description"
				placeholder="Optional"
			/>
		</div>
		<!-- Image -->
		<div class="form-group">
			<label for="img" class="col-form-label">Image URL (Web Address):</label>
			<input type="text" v-model="newMetal.img" class="form-control" id="img" placeholder="Optional" />
		</div>
		<!-- Notes -->
		<div class="form-group">
			<label for="notes" class="col-form-label">Notes:</label>
			<input
				type="text"
				v-model="newMetal.notes"
				class="form-control"
				id="notes"
				placeholder="Optional"
			/>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
		<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
	</form>
</template>

<script>
export default {
	name: "createMetalForm",
	data() {
		return {
			newMetal: {
				name: "",
				description: "",
				measurement: "",
				img: "",
				notes: "",
				posTxCount: 0,
				localValAv: 0,
				totalOwned: 0
			}
		};
	},
	methods: {
		createMetal() {
			this.$store.dispatch("createMetal", this.newMetal);
			this.newMetal = {
				name: "",
				description: "",
				measurement: "",
				img: "",
				notes: "",
				posTxCount: 0,
				localValAv: 0,
				totalOwned: 0
			};
		}
	}
};
</script>