<template>
	<div class="sample-metals row pt-5">
		<!-- Sample gold -->
		<div class="metal-comp col-12 col-md-6 col-lg-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h3 class="card-title">Gold</h3>
					<p>For saving</p>
					<img
						src="https://bitcoinist.com/wp-content/uploads/2018/09/shutterstock_742063846.jpg"
						class="card-img"
						alt="gold image"
					/>
					<div class="row text-center pt-1">
						<div class="col-12 text-center pt-1">Total grams owned: 5</div>
						<div class="col-12 text-center pt-1">
							Averaged value per gram:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							54.79
						</div>
						<div class="col-12 pt-1">
							Notes:
							Gold in Monetary Metals account
						</div>
						<!-- Buttons -->
						<div class="col-12 pt-1">
							<div class="row">
								<div>
									<button class="btn btn-sm btn-primary ml-5 mr-4">
										<a
											target="_blank"
											href="https://goldsilver.com/price-charts/gold-price/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary">Ledger</button>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Sample silver -->
		<div class="metal-comp col-12 col-md-6 col-lg-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h3 class="card-title">Silver</h3>
					<p>For spending</p>
					<img
						src="https://media.coindesk.com/uploads/2018/07/Litecoin.jpg"
						class="card-img"
						alt="silver image"
					/>
					<div class="row text-center pt-1">
						<div class="col-12 text-center pt-1">Total ounces owned: 15</div>
						<div class="col-12 text-center pt-1">
							Averaged value per ounce:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							14.85
						</div>
						<div class="col-12 pt-1">
							Notes:
							Held in Silver Token (SLVT)
						</div>
						<!-- Buttons -->
						<div class="col-12 pt-1">
							<div class="row">
								<div>
									<button class="btn btn-sm btn-primary ml-5 mr-4">
										<a
											target="_blank"
											href="https://goldsilver.com/price-charts/silver-price/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary">Ledger</button>
									</router-link>
								</div>
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
	name: "metals",
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