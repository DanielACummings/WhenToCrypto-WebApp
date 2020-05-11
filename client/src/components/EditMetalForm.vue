<template>
	<div class="edit-metal-form">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#edit-metal-modal"
			data-whatever="@getbootstrap"
		>Edit Metal</button>

		<div
			class="modal fade"
			id="edit-metal-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="edit-metal-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="edit-metal-modal-label">Edit Metal</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p class="text-left">Any field can be left blank</p>
						<form @submit.prevent="editMetal" class="text-left">
							<!-- "Which Metal?" dropdown -->
							<div class="form-group">
								<label for="which-metal" class="col-form-label">Which Metal?</label>
								<select id="which-metal" class="form-control" v-model="editedMetal.id">
									<option value disabled selected>-</option>
									<option
										v-for="metal in metals"
										:key="metal.id"
										:value="metal.id"
									>{{metal.name}} - {{metal.description || "No description"}}</option>
								</select>
							</div>
							<!-- Description -->
							<div class="form-group">
								<label for="description" class="col-form-label">Description:</label>
								<input type="text" v-model="editedMetal.description" class="form-control" id="description" />
							</div>
							<!-- Image -->
							<div class="form-group">
								<label for="img" class="col-form-label">Image URL (Web Address):</label>
								<input type="text" v-model="editedMetal.img" class="form-control" id="img" />
							</div>
							<!-- Notes -->
							<div class="form-group">
								<label for="notes" class="col-form-label">Notes:</label>
								<input type="text" v-model="editedMetal.notes" class="form-control" id="notes" />
							</div>
							<!-- Buttons -->
							<button type="submit" class="btn btn-primary">Submit</button>
							<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "editMetalForm",
	computed: {
		metals() {
			return this.$store.state.metals;
		}
	},
	data() {
		return {
			editedMetal: {
				description: "",
				img: "",
				notes: "",
				id: ""
			}
		};
	},
	methods: {
		editMetal() {
			let update = { ...this.editedMetal };
			this.$store.dispatch("editMetal", update);
			this.editedMetal = {
				description: "",
				img: "",
				notes: "",
				id: ""
			};
		}
	}
};
</script>

<style>
</style>