<template>
	<div class="metal-ledger container">
		<div class="row">
			<div class="col-12">
				<h1 class="pt-5 pb-5">
					{{ledgerMetal.name}} - {{ledgerMetal.description || 'No description'}}
					<br />Transaction History
				</h1>
			</div>
			<div class="col-12">
				<table border="2">
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount ({{ledgerMetal.measurement}})</th>
						<th>Local Curr. Val.</th>
						<th>Notes</th>
					</tr>
					<!-- transactions inserted here -->
					<metalTx v-for="tx in activeMetalLedger" :key="tx.id" :metalTxProp="tx" />
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import metalTx from "../components/MetalTx";
export default {
	name: "metalLedger",
	components: {
		metalTx
	},
	mounted() {
		this.$store.dispatch("getLedgerMetal", this.$route.params.metalId);
		this.$store.dispatch("getTxByMetal", this.$route.params.metalId);
	},
	computed: {
		activeMetalLedger() {
			return this.$store.state.activeMetalLedger;
		},
		ledgerMetal() {
			return this.$store.state.ledgerMetal;
		}
	}
};
</script>

<style>
table {
	width: 100%;
}
</style>