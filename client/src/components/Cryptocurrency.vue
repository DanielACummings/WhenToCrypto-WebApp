<template>
	<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="row text-center pt-1">
					<div class="col-12 text-center pt-1">Total owned: {{cryptoProp.totalOwned}}</div>
					<div class="col-12 text-center pt-1">
						Averaged Value:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{(cryptoProp.localValAv).toFixed(2)}}
					</div>
					<div class="col-12 pt-1">Notes: {{cryptoProp.notes}}</div>
					<div class="col-12">
						<div class="row">
							<div class="col-6 text-right">
								<button class="btn btn-sm btn-primary mt-1">
									<a target="_blank" :href="baseURL + cryptoProp.name" id="market-val-btn">Market Value</a>
								</button>
							</div>
							<div class="col-6 text-left">
								<router-link :to="{name: 'ledger', params: {cryptoId: cryptoProp.id}}">
									<button class="btn btn-sm btn-primary mt-1">View Ledger</button>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "cryptocurrency",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/"
		};
	}
};
</script>

<style>
.crypto-comp {
	color: #00bc8c;
}
#curr-symbol {
	display: inline;
	margin-right: -3px;
}
#market-val-btn {
	color: white;
}
</style>