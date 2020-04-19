<template>
	<div class="ledger container">
		<div class="row">
			<div class="col">
				<h1 class="pt-5 pb-4">Ledgers</h1>
				<h5>Future feature: View transaction history for each crypto.</h5>
				<div v-for="tx in tx" :key="tx.id">
					<!-- notes inserted here -->
					<p>{{tx.cryptoAmount}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ledger",
	mounted() {
		this.$store.dispatch("getTxByCrypto", this.$route.params.cryptoId);
	},
	computed: {
		tx() {
			return this.$store.state.tx;
		}
	}
};
</script>
<style>
</style>