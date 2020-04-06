<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 class="pb-4 pt-5 console-green">Tracked Cryptos</h1>
			</div>
		</div>
		<!-- Add crypto modal -->
		<div class="row text-center">
			<div class="col-12">
				<button
					type="button"
					class="btn btn-secondary text-center"
					data-toggle="modal"
					data-target="#add-crypto-modal"
					data-whatever="@getbootstrap"
				>Add a Crypto</button>

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
											<br />(Used in the "Current Market Value" button link, so preferably choose an actual crypto name)
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
									<button type="submit" class="btn btn-dark">Submit</button>
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row pt-5">
			<!-- User's cryptos inserted here -->
			<cryptocurrency v-for="crypto in cryptos" :key="crypto.id" :cryptoProp="crypto" />
		</div>
	</div>
</template>

<script>
import cryptocurrency from "@/components/Cryptocurrency";
export default {
	name: "boards",
	components: {
		cryptocurrency
	},
	mounted() {
		this.$store.dispatch("getCryptos");
	},
	data() {
		return {
			newCrypto: {
				name: "",
				description: "",
				img: "",
				addTCount: 0,
				addTSum: 0,
				totalOwned: 0,
				notes: ""
			}
		};
	},
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		}
	},
	methods: {
		createCrypto() {
			this.$store.dispatch("createCrypto", this.newCrypto);
			this.newCrypto = {
				name: "",
				description: "",
				img: "",
				addTCount: 0,
				addTSum: 0,
				totalOwned: 0,
				notes: ""
			};
		},
		deleteCrypto(deleteCrypto) {
			let close = confirm(
				"Records for this crypto will be lost forever.\nAre you sure you want to delete them?"
			);
			if (close == true) {
				this.$store.dispatch("deleteCrypto", deleteCrypto);
			}
		}
	}
};
</script>

<style></style>