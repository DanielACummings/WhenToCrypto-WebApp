<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 id="title" class="pb-4 pt-5">Tracked Currencies</h1>
			</div>
		</div>
		<!-- Crypto forms -->
		<div class="row text-center">
			<!-- Add crypto modal form -->
			<div class="pt-3 col-12 col-sm-6">
				<addCryptoForm />
			</div>
		</div>
		<!-- Gold & silver forms -->
		<div class="row text-center">
			<div class="pt-3 col-12 col-sm-4">
				<addMetalForm />
			</div>
			<!-- Edit currency modal -->
			<div class="pt-3 col-12 col-sm-4">
				<editCurrencyModal />
			</div>
			<!-- Creat tx modal -->
			<div class="pt-3 col-12 col-sm-4">
				<createTxModal />
			</div>
		</div>
		<!-- App usage note -->
		<div class="row">
			<div class="col pt-3">
				<p class="text-center">
					If your crypto's market value is higher than your averaged value,
					<br />you can transact without losing purchasing power.
				</p>
			</div>
		</div>
		<!-- User's cryptos inserted here -->
		<div class="row pt-5">
			<cryptocurrency v-for="crypto in cryptos" :key="crypto.id" :cryptoProp="crypto" />
		</div>
		<!-- User's metals inserted here -->
		<div class="row pt-5">
			<metal v-for="metal in metals" :key="metal.id" :metalProp="metal" />
		</div>
	</div>
</template>

<script>
import cryptocurrency from "@/components/Cryptocurrency";
import metal from "@/components/Metal";
import createTxModal from "@/components/CreateTxModal";
import editCurrencyModal from "@/components/EditCurrencyModal";

// Crypto forms
import addCryptoForm from "@/components/AddCryptoForm";

// Metal forms
import addMetalForm from "@/components/AddMetalForm";

export default {
	name: "home",
	props: ["cryptoProp"],
	components: {
		cryptocurrency,
		metal,
		addCryptoForm,
		addMetalForm,
		editCurrencyModal,
		createTxModal
	},
	mounted() {
		this.$store.dispatch("getCryptos");
		this.$store.dispatch("getMetals");
	},
	computed: {
		cryptos() {
			return this.$store.state.cryptos;
		},
		metals() {
			return this.$store.state.metals;
		}
	}
};
</script>

<style></style>