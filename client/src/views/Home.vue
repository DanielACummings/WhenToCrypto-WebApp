<template>
	<div class="home container">
		<div class="row">
			<div class="col">
				<h1 id="title" class="pb-4 pt-5">Tracked Currencies</h1>
			</div>
		</div>
		<!-- Modal forms -->
		<div class="row text-center">
			<!-- Create currency modal -->
			<div class="pt-3 col-12 col-sm-6">
				<createCurrencyModal />
			</div>
			<!-- Create tx modal -->
			<div class="pt-3 col-12 col-sm-6">
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
import createCurrencyModal from "@/components/CreateCurrencyModal";
import createTxModal from "@/components/CreateTxModal";

export default {
	name: "home",
	props: ["cryptoProp"],
	components: {
		cryptocurrency,
		metal,
		createCurrencyModal,
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