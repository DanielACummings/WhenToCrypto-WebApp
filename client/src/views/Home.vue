<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 id="title" class="pb-4 pt-5">Tracked Cryptos</h1>
			</div>
		</div>
		<div class="row text-center">
			<!-- Add crypto modal form -->
			<div class="pt-2 col-12 col-sm-6">
				<button
					type="button"
					class="btn btn-primary text-center"
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
											<br />(Used in "Market Value" link. Please choose an actual crypto name, & if name contains spaces, use "-"s instead)
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
			<!-- Create transaction modal -->
			<div class="pt-2 col-12 col-sm-6">
				<button
					type="button"
					class="btn btn-primary text-center"
					data-toggle="modal"
					data-target="#add-transaction-modal"
					data-whatever="@getbootstrap"
				>Add a Transaction</button>
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
								<div class="modal-title" id="add-transaction-modal-label">
									<h5>Add a Transaction</h5>
								</div>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form @submit.prevent="createTransaction" class="text-left">
									<!-- "Which Crypto?" dropdown -->
									<div class="form-group">
										<label for="which-crypto" class="col-form-label">Which Crypto?</label>
										<select id="which-crypto" class="form-control" v-model="newTransaction.cryptoId">
											<option v-for="crypto in cryptos" :key="crypto.id" :value="crypto.id">{{crypto.name}}</option>
										</select>
									</div>

									<!-- Transaction type dropdown -->
									<div class="form-group">
										<label for="transaction-type" class="col-form-label">Type:</label>
										<select
											v-model="newTransaction.transactionType"
											class="form-control"
											id="transaction-type"
											required
										>
											<!-- Positive -->
											<option>Purchased with Local Currency</option>
											<option>Income</option>
											<option>Earned as Payment</option>
											<option>Received as Gift</option>
											<option>Hard Fork</option>
											<option>Interest</option>
											<option>Mining</option>
											<option>Airdrop</option>
											<!-- Negative -->
											<option>Used for Payment</option>
											<option>Gave as Gift</option>
											<option>Sold for Local Currency</option>
											<option>Mining Fee for Wallet Transfer</option>
											<option>Lost or Stolen</option>
											<!-- Either -->
											<option>Conversion Between Cryptos</option>
											<option>Other</option>
										</select>
									</div>

									<!-- Date -->
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
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input
											type="text"
											v-model="newTransaction.notes"
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
		</div>
		<div class="row">
			<div class="col pt-3">
				<p class="text-center">
					If your crypto's market value is higher than your averaged value,
					<br />you can transact without losing purchasing power.
				</p>
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
	name: "home",
	props: ["cryptoProp"],
	components: {
		cryptocurrency
	},
	mounted() {
		this.$store.dispatch("getCryptos");
	},
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		}
	},
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
			},
			newTransaction: {
				transactionType: "",
				date: "",
				posOrNeg: "",
				cryptoAmount: 0,
				marketValue: 0,
				notes: "",
				cryptoId: ""
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
		},
		deleteCrypto(deleteCrypto) {
			let close = confirm(
				"Records for this crypto will be lost forever.\nAre you sure you want to delete them?"
			);
			if (close == true) {
				this.$store.dispatch("deleteCrypto", deleteCrypto);
			}
		},
		createTransaction(cryptoId) {
			let transactionData = { ...this.newTransaction };
			this.$store.dispatch("createTransaction", transactionData);
			this.newTransaction = {
				transactionType: "",
				date: "",
				posOrNeg: "",
				cryptoAmount: 0,
				marketValue: 0,
				notes: "",
				cryptoId: ""
			};
		}
	}
};
</script>

<style></style>