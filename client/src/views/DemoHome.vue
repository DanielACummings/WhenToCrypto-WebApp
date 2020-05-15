<template>
	<div class="demo-home container">
		<div class="row">
			<div class="col">
				<h1 id="title" class="pb-4 pt-5">Tracked Currencies</h1>
			</div>
		</div>
		<!-- Modal forms -->
		<div class="row text-center">
			<!-- Create currency modal -->
			<div class="pt-3 col-12 col-sm-4">
				<createCurrencyModal />
			</div>
			<!-- Edit currency modal -->
			<div class="pt-3 col-12 col-sm-4">
				<editCurrencyModal />
			</div>
			<!-- Create tx modal -->
			<div class="pt-3 col-12 col-sm-4">
				<createTxModal />
			</div>
		</div>
		<!-- App usage note -->
		<div class="row">
			<div class="col-12 pt-3">
				<p class="text-center">
					If your currency's market value is higher than your averaged value,
					<br />you can spend or sell it without losing purchasing power.
				</p>
			</div>
		</div>
		<!-- Sample cryptos -->
		<cryptocurrencies />
		<!-- Sample metals -->
		<metals />
	</div>
</template>

<script>
import cryptocurrencies from "@/components/demo/Cryptocurrencies";
import metals from "@/components/demo/Metals";
import createCurrencyModal from "@/components/demo/CreateCurrencyModal";
import createTxModal from "@/components/demo/CreateTxModal";
import editCurrencyModal from "@/components/demo/EditCurrencyModal";

export default {
	name: "demoHome",
	components: {
		cryptocurrencies,
		metals,
		createCurrencyModal,
		editCurrencyModal,
		createTxModal
	}
};
</script>