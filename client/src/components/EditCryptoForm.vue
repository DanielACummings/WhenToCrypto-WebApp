<template>
	<div class="edit-crypto-form">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#edit-crypto-modal"
			data-whatever="@getbootstrap"
		>Edit Crypto</button>

		<div
			class="modal fade"
			id="edit-crypto-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="edit-crypto-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="edit-crypto-modal-label">Edit Crypto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<p class="text-left">Any field can be left blank</p>
						<form @submit.prevent="editCrypto" class="text-left">
							<!-- "Which Crypto?" dropdown -->
							<div class="form-group">
								<label for="which-crypto" class="col-form-label">Which Crypto?</label>
								<select id="which-crypto" class="form-control" v-model="editedCrypto.id">
									<option value disabled selected>-</option>
									<option
										v-for="crypto in cryptos"
										:key="crypto.id"
										:value="crypto.id"
									>{{crypto.name}} - {{crypto.description || "No description"}}</option>
								</select>
							</div>
							<div class="form-group">
								<label for="name" class="col-form-label">
									Name:
									<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
								</label>
								<input
									type="text"
									v-model="editedCrypto.name"
									class="form-control"
									id="name"
									placeholder="Not Case Sensitive"
								/>
							</div>
							<div class="form-group">
								<label for="description" class="col-form-label">Description:</label>
								<input type="text" v-model="editedCrypto.description" class="form-control" id="description" />
							</div>
							<div class="form-group">
								<label for="img" class="col-form-label">Image URL (Web Address):</label>
								<input type="text" v-model="editedCrypto.img" class="form-control" id="img" />
							</div>
							<div class="form-group">
								<label for="notes" class="col-form-label">Notes:</label>
								<input type="text" v-model="editedCrypto.notes" class="form-control" id="notes" />
							</div>
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
	name: "editCryptoForm",
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		}
	},
	data() {
		return {
			editedCrypto: {
				name: "",
				description: "",
				img: "",
				notes: "",
				id: ""
			}
		};
	},
	methods: {
		editCrypto() {
			let update = { ...this.editedCrypto };
			this.$store.dispatch("editCrypto", update);
			this.editedCrypto = {
				name: "",
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