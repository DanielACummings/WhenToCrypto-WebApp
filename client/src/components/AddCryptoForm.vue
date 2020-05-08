<template>
	<div class="add-crypto-form">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#add-crypto-modal"
			data-whatever="@getbootstrap"
		>Add Crypto</button>

		<div
			class="modal fade"
			id="add-crypto-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="add-crypto-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="add-crypto-modal-label">Add a Crypto</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="createCrypto" class="text-left">
							<div class="form-group">
								<label for="name" class="col-form-label">
									Name:
									<br />(Used in "Market Value" link. Please choose an actual crypto's full name (e.g., Bitcoin) and not its ticker symbol (e.g., BTC).
								</label>
								<input
									type="text"
									v-model="newCrypto.name"
									class="form-control"
									id="name"
									placeholder="Not Case Sensitive"
									required
								/>
							</div>
							<div class="form-group">
								<label for="description" class="col-form-label">Description:</label>
								<input
									type="text"
									v-model="newCrypto.description"
									class="form-control"
									id="description"
									placeholder="Optional"
								/>
							</div>
							<div class="form-group">
								<label for="img" class="col-form-label">Image URL (Web Address):</label>
								<input
									type="text"
									v-model="newCrypto.img"
									class="form-control"
									id="img"
									placeholder="Optional"
								/>
							</div>
							<div class="form-group">
								<label for="notes" class="col-form-label">Notes:</label>
								<input
									type="text"
									v-model="newCrypto.notes"
									class="form-control"
									id="notes"
									placeholder="Optional"
								/>
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
	name: "addCryptoForm",
	data() {
		return {
			newCrypto: {
				name: "",
				description: "",
				img: "",
				notes: "",
				posTxCount: 0,
				localValAv: 0,
				totalOwned: 0
			}
		};
	},
	methods: {
		createCrypto() {
			this.$store.dispatch("createCrypto", this.newCrypto);
			this.newCrypto = {
				name: "",
				description: "",
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

<style>
</style>