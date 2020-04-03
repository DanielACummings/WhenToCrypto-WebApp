<template>
	<div class="crypto-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="row text-center pt-1">
					<div class="col-12 text-center pt-1">Averaged Value:</div>
					<div class="col">
						<button class="btn btn-sm btn-warning">
							<a target="_blank" :href="baseURL + cryptoProp.name">Current Market Value</a>
						</button>
					</div>
				</div>
				<!-- Create transaction modal -->
				<div class="row text-center">
					<div class="col-12">
						<button
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
									</div>
									<div class="modal-body">
										<form @submit.prevent="createTransaction" class="text-left">
											<div class="form-group">
												<label for="transaction-type" class="col-form-label">Transaction Type:</label>
												<input
													type="text"
													list="options"
													v-model="newTransaction.transactionType"
													class="form-control"
													id="transaction-type"
													placeholder="Use Dropdown or Type Answer"
												/>
												<datalist id="options">
													<option>Purchased with Local Currency</option>
													<option>Earned as Income</option>
													<option>Earned as Payment</option>
													<option>Received as Gift</option>
													<option>Sold for Local Currency</option>
												</datalist>
											</div>
											<div class="form-group">
												<input type="radio" id="pos" name="pos-or-neg" value="True" required />
												<label for="pos">+</label>
												<input type="radio" id="neg" name="pos-or-neg" value="False" />
												<label for="neg">-</label>
											</div>
											<div class="form-group">
												<label for="description" class="col-form-label">Crypto Value:</label>
												<input
													type="text"
													v-model="newTransaction.description"
													class="form-control"
													id="description"
													placeholder="Example: 0.12345678"
												/>
											</div>
											<div class="form-group">
												<label for="market-value" class="col-form-label">
													Transaction Value in Local Currency:
													<br />(At Time of Transaction)
												</label>
												<input
													type="number"
													v-model="newTransaction.marketValue"
													class="form-control"
													id="market-value"
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
			newTransaction: {
				isPositive: Boolean,
				cryptoAmount: 0,
				marketValue: 0,
				date: "",
				transactionType: "" /* make dropdown */
			}
		};
	},
	methods: {
		createTransaction(cryptoId) {
			this.$store.dispatch("createTransaction", this.newTransaction);
			this.newTransaction = {
				isPositive: Boolean,
				cryptoAmount: 0,
				marketValue: 0,
				date: "",
				transactionType: ""
			};
		}
	}
};
</script>
<style>
</style>