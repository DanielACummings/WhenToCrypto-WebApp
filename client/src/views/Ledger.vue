<template>
	<div class="ledger container">
		<div class="row">
			<div class="col">
				<h1 class="pt-5 pb-4">Ledgers</h1>
				<h5>Future feature: View transaction history for each crypto.</h5>
				<p>
					Prior to feature being added, all transactions
					<br />created will be saved for future display.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ledger",
	mounted() {
		this.$store.dispatch("getTxByCrypto", this.$route.params.id);
	}
};
</script>
<style>
</style>