<template>
	<div class="row pt-5">
		<!-- Sample crypto 1 -->
		<div class="crypto-comp col-12 col-md-6 col-lg-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h3 class="card-title">Bitcoin</h3>
					<p>#1</p>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"
						class="card-img"
						alt="crypto image"
					/>
					<div class="row text-center pt-1">
						<div class="col-12 text-center pt-1">Total owned: 0.07139542</div>
						<div class="col-12 text-center pt-1">
							Average value of balance:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							544.36
						</div>
						<div class="col-12 text-center pt-1">
							Average value per coin:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							7624.62
						</div>
						<div class="col-12 pt-1">Notes: All wallets</div>
						<!-- Buttons -->
						<div class="col-12 pt-1">
							<div class="row">
								<div>
									<button class="btn btn-sm btn-primary ml-4 mr-3">
										<a
											target="_blank"
											href="https://coinmarketcap.com/currencies/bitcoin/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary mr-3">Ledger</button>
									</router-link>
								</div>
								<!-- Edit/close button & form -->
								<button
									v-if="showForm1 == 'closed'"
									@click="showForm1 = 'open'"
									class="btn btn-sm btn-primary"
								>Edit</button>
								<button v-else @click="showForm1 = 'closed'" class="btn btn-sm btn-primary">Close</button>
								<form v-if="showForm1 == 'open'" class="text-left">
									<p class="pt-4 text-center">Edit</p>
									<!-- Name -->
									<div class="form-group">
										<label for="name" class="col-form-label">
											Name:
											<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
										</label>
										<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
									</div>
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
		<!-- Sample crypto 2 -->
		<div class="crypto-comp col-12 col-md-6 col-lg-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h3 class="card-title">Litecoin</h3>
					<p>The silver to Bitcoin's gold</p>
					<img
						src="https://image.freepik.com/free-photo/litecoin-coin-dark-background_143092-670.jpg"
						class="card-img"
						alt="crypto image"
					/>
					<div class="row text-center pt-1">
						<div class="col-12 text-center pt-1">Total owned: 9.19486423</div>
						<div class="col-12 text-center pt-1">
							Average value of balance:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							413.03
						</div>
						<div class="col-12 text-center pt-1">
							Average value per coin:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							44.92
						</div>
						<div class="col-12 pt-1">Notes: Stored in Crypto.com account</div>
						<!-- Buttons -->
						<div class="col-12 pt-1">
							<div class="row">
								<div>
									<button class="btn btn-sm btn-primary ml-4 mr-3">
										<a
											target="_blank"
											href="https://coinmarketcap.com/currencies/litecoin/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary mr-3">Ledger</button>
									</router-link>
								</div>
								<!-- Edit/close button & form -->
								<button
									v-if="showForm2 == 'closed'"
									@click="showForm2 = 'open'"
									class="btn btn-sm btn-primary"
								>Edit</button>
								<button v-else @click="showForm2 = 'closed'" class="btn btn-sm btn-primary">Close</button>
								<form v-if="showForm2 == 'open'" class="text-left">
									<p class="pt-4 text-center">Edit</p>
									<!-- Name -->
									<div class="form-group">
										<label for="name" class="col-form-label">
											Name:
											<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
										</label>
										<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
									</div>
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
		<!-- Sample crypto 3 -->
		<div class="crypto-comp col-12 col-md-6 col-lg-4 pb-3">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h3 class="card-title">Zcash</h3>
					<p>Anonymous crypto</p>
					<img
						src="https://www.coinpayments.net/images/coins/ZEC.png"
						class="card-img"
						alt="crypto image"
					/>
					<div class="row text-center pt-1">
						<div class="col-12 text-center pt-1">Total owned: 12.64237568</div>
						<div class="col-12 text-center pt-1">
							Average value of balance:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							560.06
						</div>
						<div class="col-12 text-center pt-1">
							Average value per coin:
							<br />
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
							44.30
						</div>
						<div class="col-12 pt-1">Notes: Buy more next month</div>
						<!-- Buttons -->
						<div class="col-12 pt-1">
							<div class="row">
								<div>
									<button class="btn btn-sm btn-primary ml-4 mr-3">
										<a
											target="_blank"
											href="https://coinmarketcap.com/currencies/zcash/"
											id="market-val-btn"
										>Market Value</a>
									</button>
								</div>
								<div>
									<router-link :to="{name: 'demoLedger'}">
										<button class="btn btn-sm btn-primary mr-3">Ledger</button>
									</router-link>
								</div>
								<!-- Edit/close button & form -->
								<button
									v-if="showForm3 == 'closed'"
									@click="showForm3 = 'open'"
									class="btn btn-sm btn-primary"
								>Edit</button>
								<button v-else @click="showForm3 = 'closed'" class="btn btn-sm btn-primary">Close</button>
								<form v-if="showForm3 == 'open'" class="text-left">
									<p class="pt-4 text-center">Edit</p>
									<!-- Name -->
									<div class="form-group">
										<label for="name" class="col-form-label">
											Name:
											<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
										</label>
										<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
									</div>
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
									<button @click="closeForm3" class="btn btn-primary">Submit</button>
									<button
										@click="showForm3 = 'closed'"
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
	name: "cryptocurrencies",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/",
			showForm1: "closed",
			showForm2: "closed",
			showForm3: "closed"
		};
	},
	methods: {
		closeForm1() {
			this.showForm = "closed";
		},
		closeForm2() {
			this.showForm = "closed";
		},
		closeForm3() {
			this.showForm = "closed";
		}
	}
};
</script>

<style>
.card {
	background: rgb(27, 26, 26);
}
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