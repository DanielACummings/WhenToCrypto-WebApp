<template>
	<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="row text-center pt-1">
					<div
						class="col-12 text-center pt-1"
					>Total owned: {{parseFloat((cryptoProp.totalOwned).toFixed(8))}}</div>
					<div class="col-12 text-center pt-1">
						Averaged Value Per Coin:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{(cryptoProp.localValAv).toFixed(2)}}
					</div>
					<div class="col-12 pt-1">Notes: {{cryptoProp.notes}}</div>
					<!-- Buttons -->
					<div class="col-12">
						<div class="row">
							<div>
								<button class="btn btn-sm btn-primary mt-1 ml-3 mr-2">
									<a target="_blank" :href="baseURL + cryptoProp.name" id="market-val-btn">Market Value</a>
								</button>
							</div>
							<div>
								<router-link :to="{name: 'ledger', params: {cryptoId: cryptoProp.id}}">
									<button class="btn btn-sm btn-primary mt-1 ml-3 mr-2">Ledger</button>
								</router-link>
							</div>
							<!-- Edit crypto modal form -->
							<div>
								<button
									type="button"
									class="btn btn-sm mt-1 ml-3 mr-2 btn-primary text-center"
									data-toggle="modal"
									data-target="#edit-crypto-modal"
									data-whatever="@getbootstrap"
								>Edit</button>

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
															<option v-for="crypto in cryptos" :key="crypto.id" :value="crypto.id">{{crypto.name}}</option>
														</select>
													</div>
													<div class="form-group">
														<label for="name" class="col-form-label">Name:</label>
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
														<input
															type="text"
															v-model="editedCrypto.description"
															class="form-control"
															id="description"
														/>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "cryptocurrency",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/",
			editedCrypto: {
				name: "",
				description: "",
				img: "",
				notes: "",
				id: ""
			}
		};
	},
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		}
	},
	methods: {
		editCrypto() {
			let update = { ...this.editedCrypto };
			console.log(update);
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
.card {
	background: rgb(27, 26, 26);
}
.crypto-comp {
	color: #00bc8c;
}
#curr-symbol {
	display: inline;
	margin-right: -3px;
}
#market-val-btn {
	color: white;
}
</style>