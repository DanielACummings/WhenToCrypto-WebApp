<template>
	<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="row text-center pt-1">
					<div class="col-12 text-center pt-1">
						Averaged Value:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_">¤</a>
						{{(cryptoProp.posTxCount /cryptoProp.posTxLocalValSum).toFixed(2)}}
					</div>
					<div class="col">
						<button class="btn btn-sm btn-dark mb-1">
							<a target="_blank" :href="baseURL + cryptoProp.name">Market Value</a>
						</button>
					</div>
				</div>
				<!-- Create transaction modal -->
				<div class="row text-center">
					<div class="col-12">
						<!-- <button
							type="button"
							class="btn btn-secondary text-center"
							data-toggle="modal"
							data-target="#add-transaction-modal"
							data-whatever="@getbootstrap"
						>Add Transaction</button>
						<div
							class="modal fade"
							id="add-transaction-modal"
							tabindex="-1"
							role="dialog"
							aria-labelledby="add-transaction-modal-label"
							aria-hidden="true"
						>
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="add-transaction-modal-label">Add Transaction</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
						</div>-->
						<div class="modal-body">
							<p class="text-left">Note: Do Not Add Transfers Between Your Wallets</p>
							<form @submit.prevent="createTransaction(cryptoProp)" class="text-left">
								<!-- Transaction type dropdown -->
								<div class="form-group">
									<label for="transaction-type" class="col-form-label">Type:</label>
									<input
										type="text"
										list="options"
										v-model="newTransaction.transactionType"
										class="form-control"
										id="transaction-type"
										placeholder="Type Answer or Click Dropdown"
										required
									/>
									<datalist id="options">
										<option>Purchased of Crypto with Local Currency</option>
										<option>Income</option>
										<option>Earned as Payment</option>
										<option>Received as Gift</option>
										<option>Gave as Gift</option>
										<option>Converted Between Cryptos</option>
										<option>Hard Fork</option>
										<option>Interest</option>
										<option>Sold for Local Currency</option>
										<option>Mining</option>
									</datalist>
								</div>
								<div class="form-group">
									<label for="date" class="col-form-label">Date:</label>
									<input
										type="text"
										v-model="newTransaction.date"
										class="form-control"
										id="date"
										placeholder="yyyy/mm/dd"
										required
									/>
								</div>
								<!-- +/- radio buttons for adding or subtracting from ledger-->
								<div class="form-group">
									<label for="pos-or-neg">Adding or Subtracting from Ledger?:</label>
									<br />
									<input
										type="radio"
										v-model="newTransaction.posOrNeg"
										id="pos"
										name="pos-or-neg"
										value="pos"
										required
									/>
									<label for="pos">Adding</label>
									<input
										type="radio"
										v-model="newTransaction.posOrNeg"
										id="neg"
										name="pos-or-neg"
										value="neg"
									/>
									<label for="neg">Subtracting</label>
								</div>
								<div class="form-group">
									<label for="crypto-value" class="col-form-label">Amount of Crypto:</label>
									<input
										type="number"
										step="any"
										v-model="newTransaction.cryptoAmount"
										class="form-control"
										id="crypto-value"
										placeholder="Example: 0.12345678"
										required
									/>
								</div>
								<div class="form-group">
									<label for="market-value" class="col-form-label">
										Amount of Local Currency:
										<br />(Including Fees)
									</label>
									<input
										type="number"
										step="any"
										v-model="newTransaction.marketValue"
										class="form-control"
										id="market-value"
										required
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
	<!-- </div> -->
	<!-- </div> -->
	<!-- </div> -->
</template>
<script>
export default {
	name: "cryptocurrency",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/",
			newTransaction: {
				transactionType: "",
				date: "",
				posOrNeg: "",
				cryptoAmount: 0,
				marketValue: 0
			}
		};
	},
	methods: {
		createTransaction(cryptoProp) {
			let transactionData = { ...this.newTransaction };
			transactionData.cryptoId = cryptoProp.id;
			this.$store.dispatch("createTransaction", transactionData);
			this.newTransaction = {
				transactionType: "",
				date: "",
				posOrNeg: "",
				cryptoAmount: 0,
				marketValue: 0
			};
		}
	}
};
</script>
<style>
</style>