<template>
	<div class="metal-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{metalProp.name}}</h3>
				<p>{{metalProp.description}}</p>
				<img :src="metalProp.img" class="card-img" alt="metal image" />
				<div class="row text-center pt-1">
					<div
						class="col-12 text-center pt-1"
					>Total owned: {{parseFloat((metalProp.totalOwned).toFixed(8))}}</div>
					<div class="col-12 text-center pt-1">
						Averaged Value Per {{metalProp.measurement.slice(0, -1)}}:
						<br />
						<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
						{{(metalProp.localValAv).toFixed(2)}}
					</div>
					<div class="col-12 pt-1">Notes: {{metalProp.notes}}</div>
					<!-- Buttons -->
					<div class="col-12 pt-1">
						<div class="row">
							<div>
								<button class="btn btn-sm btn-primary ml-5 mr-4">
									<a
										target="_blank"
										:href="baseURL + metalProp.name.toLowerCase() + '-price/'"
										id="market-val-btn"
									>Market Value</a>
								</button>
							</div>
							<div>
								<router-link :to="{name: 'metalLedger', params: {metalId: metalProp.id}}">
									<button class="btn btn-sm btn-primary">Ledger</button>
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
	name: "metal",
	props: ["metalProp"],
	data() {
		return {
			baseURL: "https://goldsilver.com/price-charts/"
		};
	}
};
</script>

<style>
.card {
	background: rgb(27, 26, 26);
}
.metal-comp {
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