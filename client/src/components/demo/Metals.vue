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
									<button class="btn btn-sm btn-primary ml-4 mr-3">
										<a
											target="_blank"
											href="https://goldsilver.com/price-charts/gold-price/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary mr-3">Ledger</button>
									</router-link>
								</div>
								<!-- Edit/Close button -->
								<button
									v-if="showForm1 == 'closed'"
									@click="showForm1 = 'open'"
									class="btn btn-sm btn-primary"
								>Edit</button>
								<button v-else @click="showForm1 = 'closed'" class="btn btn-sm btn-primary">Close</button>
								<form v-if="showForm1 == 'open'" class="text-left">
									<p class="pt-4 text-center">Edit</p>
									<!-- Description -->
									<div class="form-group">
										<label for="description" class="col-form-label">Description:</label>
										<input type="text" class="form-control" id="description" />
									</div>
									<!-- Image -->
									<div class="form-group">
										<label for="img" class="col-form-label">Image URL (Web Address):</label>
										<input type="text" class="form-control" id="img" />
									</div>
									<!-- Notes -->
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input type="text" class="form-control" id="notes" />
									</div>
									<!-- Buttons -->
									<button @click="closeForm1" class="btn btn-primary">Submit</button>
									<button
										@click="showForm1 = 'closed'"
										type="button"
										class="btn btn-warning"
										data-dismiss="modal"
									>Close</button>
								</form>
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
									<button class="btn btn-sm btn-primary ml-4 mr-3">
										<a
											target="_blank"
											href="https://goldsilver.com/price-charts/silver-price/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary mr-3">Ledger</button>
									</router-link>
								</div>
								<!-- Edit/Close button -->
								<button
									v-if="showForm2 == 'closed'"
									@click="showForm2 = 'open'"
									class="btn btn-sm btn-primary"
								>Edit</button>
								<button v-else @click="showForm2 = 'closed'" class="btn btn-sm btn-primary">Close</button>
								<form v-if="showForm2 == 'open'" class="text-left">
									<p class="pt-4 text-center">Edit</p>
									<!-- Description -->
									<div class="form-group">
										<label for="description" class="col-form-label">Description:</label>
										<input type="text" class="form-control" id="description" />
									</div>
									<!-- Image -->
									<div class="form-group">
										<label for="img" class="col-form-label">Image URL (Web Address):</label>
										<input type="text" class="form-control" id="img" />
									</div>
									<!-- Notes -->
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input type="text" class="form-control" id="notes" />
									</div>
									<!-- Buttons -->
									<button @click="closeForm2" class="btn btn-primary">Submit</button>
									<button
										@click="showForm2 = 'closed'"
										type="button"
										class="btn btn-warning"
										data-dismiss="modal"
									>Close</button>
								</form>
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
			showForm1: "closed",
			showForm2: "closed",
			baseURL: "https://goldsilver.com/price-charts/"
		};
	},
	methods: {
		closeForm1() {
			this.showForm = "closed";
		},
		closeForm2() {
			this.showForm = "closed";
		}
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