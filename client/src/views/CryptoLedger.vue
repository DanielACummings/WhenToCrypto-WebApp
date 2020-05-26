<template>
	<div class="crypto-ledger container">
		<div class="row">
			<div class="col-12">
				<h1 class="pt-5 pb-5">
					{{ledgerCrypto.name}} - {{ledgerCrypto.description || 'No description'}}
					<br />Transaction History
				</h1>
			</div>
			<div class="col-12">
				<table border="2">
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Local Curr. Val.</th>
						<th>Notes</th>
					</tr>
					<!-- transactions inserted here -->
					<cryptoTransaction v-for="tx in activeCryptoLedger" :key="tx.id" :cryptoTxProp="tx" />
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import cryptoTransaction from "../components/CryptoTransaction";
export default {
	name: "cryptoLedger",
	components: {
		cryptoTransaction
	},
	mounted() {
		this.$store.dispatch("getLedgerCrypto", this.$route.params.cryptoId);
		this.$store.dispatch("getTxByCrypto", this.$route.params.cryptoId);
	},
	computed: {
		activeCryptoLedger() {
			return this.$store.state.activeCryptoLedger;
		},
		ledgerCrypto() {
			return this.$store.state.ledgerCrypto;
		}
	}
};
</script>

<style>
table {
	width: 100%;
}
</style>