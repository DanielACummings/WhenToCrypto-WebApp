<template>
	<div class="add-metal-tx-form">
		<button
			type="button"
			class="btn btn-primary text-center"
			data-toggle="modal"
			data-target="#add-metal-tx-modal"
			data-whatever="@getbootstrap"
		>Add Metal Tx</button>
		<div
			class="modal fade"
			id="add-metal-tx-modal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="add-tx-modal-label"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<div class="modal-title" id="add-tx-modal-label">
							<h5>Add a Metal Transaction</h5>
						</div>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form @submit.prevent="createMetalTx" class="text-left">
							<!-- "Which Metal?" dropdown -->
							<div class="form-group">
								<label for="which-crypto" class="col-form-label">Which Metal?</label>
								<select id="which-crypto" class="form-control" v-model="newMetalTx.metalId">
									<option value disabled selected>-</option>
									<option
										v-for="metal in metals"
										:key="metal.id"
										:value="metal.id"
									>{{metal.name}} - {{metal.description || 'No description'}}</option>
								</select>
							</div>

							<!-- Transaction type dropdown -->
							<div class="form-group">
								<label for="transaction-type" class="col-form-label">Type:</label>
								<select v-model="newMetalTx.txType" class="form-control" id="transaction-type" required>
									<!-- Placeholder -->
									<option value disabled selected>-</option>
									<!-- Positive -->
									<option>Purchased with Local Currency</option>
									<option>Income</option>
									<option>Earned as Payment</option>
									<option>Received as Gift</option>
									<option>Interest</option>
									<!-- Negative -->
									<option>Used for Payment</option>
									<option>Gave as Gift</option>
									<option>Sold for Local Currency</option>
									<option>Lost or Stolen</option>
									<!-- Either -->
									<option>Conversion Between Metals</option>
									<option>Other</option>
								</select>
							</div>

							<!-- Date -->
							<div class="form-group">
								<label for="date" class="col-form-label">Date:</label>
								<input
									type="text"
									v-model="newMetalTx.date"
									class="form-control"
									id="date"
									placeholder="yyyy/mm/dd"
									required
								/>
							</div>
							<!-- +/- radio buttons for adding or subtracting from ledger-->
							<div class="form-group">
								<label for="pos-or-neg" class="col-form-label">Adding or Subtracting from Ledger?</label>
								<br />
								<input
									type="radio"
									v-model="newMetalTx.posOrNeg"
									id="pos"
									name="pos-or-neg"
									value="pos"
									required
								/>
								<label for="pos">Adding</label>
								<input type="radio" v-model="newMetalTx.posOrNeg" id="neg" name="pos-or-neg" value="neg" />
								<label for="neg">Subtracting</label>
							</div>
							<div class="form-group">
								<label for="metal-amount" class="col-form-label">
									Amount of Metal:
									<br />(Be sure to enter based on correct unit of measurement)
								</label>
								<input
									type="number"
									step="any"
									min="0"
									v-model="newMetalTx.metalAmount"
									class="form-control"
									id="metal-amount"
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
									min=">0"
									v-model="newMetalTx.marketValue"
									class="form-control"
									id="market-value"
									required
								/>
							</div>
							<div class="form-group">
								<label for="notes" class="col-form-label">Notes:</label>
								<input
									type="text"
									v-model="newMetalTx.notes"
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
	name: "addMetalTxForm",
	data() {
		return {
			newMetalTx: {
				txType: "",
				date: "",
				posOrNeg: "",
				metalAmount: 0,
				marketValue: 0,
				notes: "",
				id: ""
			}
		};
	},
	computed: {
		metals() {
			return this.$store.state.metals;
		}
	},
	methods: {
		createMetalTx(metalId) {
			let txData = { ...this.newMetalTx };
			this.$store.dispatch("createMetalTx", txData);
			this.newMetalTx = {
				txType: "",
				date: "",
				posOrNeg: "",
				metalAmount: 0,
				marketValue: 0,
				notes: "",
				metalId: ""
			};
		}
	}
};
</script>
<style>
</style>