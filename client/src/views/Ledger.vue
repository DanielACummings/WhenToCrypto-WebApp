<template>
	<div class="ledger container">
		<div class="row">
			<div class="col-12">
				<h1 class="pt-5 pb-5">{{ledgerCryptoName}} Transaction History</h1>
			</div>
			<div class="col-12">
				<table border="2">
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Local Curr. Val.</th>
					</tr>
					<!-- transactions inserted here -->
					<transaction v-for="tx in activeLedger" :key="tx.id" :txProp="tx" />
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import transaction from "../components/Transaction";
export default {
	name: "ledger",
	components: {
		transaction
	},
	mounted() {
		this.$store.dispatch("getLedgerCrypto", this.$route.params.cryptoId);
		this.$store.dispatch("getTxByCrypto", this.$route.params.cryptoId);
	},
	computed: {
		activeLedger() {
			return this.$store.state.activeLedger;
		},
		ledgerCryptoName() {
			return this.$store.state.ledgerCrypto.name;
		}
	}
};
</script>

<style>
table {
	width: 100%;
}
</style>