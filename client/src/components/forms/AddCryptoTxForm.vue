<template>
	<form @submit.prevent="createTransaction" class="text-left">
		<!-- Secret transaction checkbox -->
		<div class="form-group">
			<input type="checkbox" id="secret" />
			<label for="secret">Secret Transaction</label>
		</div>
		<!-- "Which Crypto?" dropdown -->
		<div class="form-group">
			<label for="which-crypto" class="col-form-label">Which Crypto?</label>
			<select id="which-crypto" class="form-control" v-model="newCryptoTransaction.cryptoId">
				<option value disabled selected>-</option>
				<option
					v-for="crypto in cryptos"
					:key="crypto.id"
					:value="crypto.id"
				>{{crypto.name}} - {{crypto.description || "No description"}}</option>
			</select>
		</div>

		<!-- Transaction type dropdown -->
		<div class="form-group">
			<label for="transaction-type" class="col-form-label">Type:</label>
			<select
				v-model="newCryptoTransaction.transactionType"
				class="form-control"
				id="transaction-type"
				required
			>
				<!-- Placeholder -->
				<option value disabled selected>-</option>
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
				v-model="newCryptoTransaction.date"
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
				v-model="newCryptoTransaction.posOrNeg"
				id="pos"
				name="pos-or-neg"
				value="pos"
				required
			/>
			<label class="pr-4" for="pos">Adding</label>
			<input
				type="radio"
				v-model="newCryptoTransaction.posOrNeg"
				id="neg"
				name="pos-or-neg"
				value="neg"
			/>
			<label for="neg">Subtracting</label>
		</div>
		<div class="form-group">
			<label for="crypto-amount" class="col-form-label">Amount of Crypto:</label>
			<input
				type="number"
				step="any"
				min="0"
				v-model="newCryptoTransaction.cryptoAmount"
				class="form-control"
				id="crypto-amount"
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
				min="0"
				v-model="newCryptoTransaction.marketValue"
				class="form-control"
				id="market-value"
				required
			/>
		</div>
		<div class="form-group">
			<label for="notes" class="col-form-label">Notes:</label>
			<input
				type="text"
				v-model="newCryptoTransaction.notes"
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
	name: "addCryptoTxForm",
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		}
	},
	data() {
		return {
			newCryptoTransaction: {
				transactionType: "",
				date: "",
				posOrNeg: "",
				cryptoAmount: 0,
				marketValue: 0,
				notes: "",
				id: ""
			}
		};
	},
	methods: {
		createTransaction(cryptoId) {
			let transactionData = { ...this.newCryptoTransaction };
			this.$store.dispatch("createTransaction", transactionData);
			this.newCryptoTransaction = {
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