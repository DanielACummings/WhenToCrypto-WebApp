<template>
	<div class="home-view-demo container">
		<div class="row">
			<div class="col">
				<h1 id="title" class="pb-4 pt-5">Tracked Currencies</h1>
			</div>
		</div>
		<!-- Crypto forms -->
		<div class="row text-center">
			<!-- Add crypto modal form -->
			<div class="pt-3 col-12 col-sm-4">
				<button
					type="button"
					class="btn btn-primary text-center"
					data-toggle="modal"
					data-target="#add-crypto-modal"
					data-whatever="@getbootstrap"
				>Add Crypto</button>

				<div
					class="modal fade"
					id="add-crypto-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="add-crypto-modal-label"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="add-crypto-modal-label">Add a Crypto</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form class="text-left">
									<div class="form-group">
										<label for="name" class="col-form-label">
											Name:
											<br />(Used in "Market Value" link. Please choose an actual crypto's full name (e.g., Bitcoin) and not its ticker symbol (e.g., BTC).
										</label>
										<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
									</div>
									<div class="form-group">
										<label for="description" class="col-form-label">Description:</label>
										<input type="text" class="form-control" id="description" placeholder="Optional" />
									</div>
									<div class="form-group">
										<label for="img" class="col-form-label">Image URL (Web Address):</label>
										<input type="text" class="form-control" id="img" placeholder="Optional" />
									</div>
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input type="text" class="form-control" id="notes" placeholder="Optional" />
									</div>
									<button type="submit" class="btn btn-primary">Submit</button>
									<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Edit crypto modal form -->
			<div class="pt-3 col-12 col-sm-4">
				<button
					type="button"
					class="btn btn-primary text-center"
					data-toggle="modal"
					data-target="#edit-crypto-modal"
					data-whatever="@getbootstrap"
				>Edit Crypto</button>

				<div
					class="modal fade"
					id="edit-crypto-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="edit-crypto-modal-label"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="edit-crypto-modal-label">Edit Crypto</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<p class="text-left">Any field can be left blank</p>
								<form class="text-left">
									<!-- "Which Crypto?" dropdown -->
									<div class="form-group">
										<label for="which-crypto" class="col-form-label">Which Crypto?</label>
										<select id="which-crypto" class="form-control">
											<option value disabled selected>-</option>
											<option>Enter Sample Crypto Names</option>
										</select>
									</div>
									<div class="form-group">
										<label for="name" class="col-form-label">
											Name:
											<br />(Used in "Market Value" link. Please choose an actual crypto name. If name contains spaces, use "-"s instead)
										</label>
										<input type="text" class="form-control" id="name" placeholder="Not Case Sensitive" />
									</div>
									<div class="form-group">
										<label for="description" class="col-form-label">Description:</label>
										<input type="text" class="form-control" id="description" />
									</div>
									<div class="form-group">
										<label for="img" class="col-form-label">Image URL (Web Address):</label>
										<input type="text" class="form-control" id="img" />
									</div>
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input type="text" class="form-control" id="notes" />
									</div>
									<button type="submit" class="btn btn-primary">Submit</button>
									<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Create transaction modal -->
			<div class="pt-3 col-12 col-sm-4">
				<button
					type="button"
					class="btn btn-primary text-center"
					data-toggle="modal"
					data-target="#add-transaction-modal"
					data-whatever="@getbootstrap"
				>Add Crypto Transaction</button>
				<div
					class="modal fade"
					id="add-transaction-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="add-transaction-modal-label"
					aria-hidden="true"
				>
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<div class="modal-title" id="add-transaction-modal-label">
									<h5>Add a Crypto Transaction</h5>
								</div>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form class="text-left">
									<!-- "Which Crypto?" dropdown -->
									<div class="form-group">
										<label for="which-crypto" class="col-form-label">Which Crypto?</label>
										<select id="which-crypto" class="form-control">
											<option value disabled selected>-</option>
											<option>Enter sample crypto names</option>
										</select>
									</div>

									<!-- Transaction type dropdown -->
									<div class="form-group">
										<label for="transaction-type" class="col-form-label">Type:</label>
										<select class="form-control" id="transaction-type">
											<!-- Placeholder -->
											<option value disabled selected>-</option>
											<!-- Positive -->
											<option>Purchased with Local Currency</option>
											<option>Income</option>
											<option>Earned as Payment</option>
											<option>Received as Gift</option>
											<option>Hard Fork</option>
											<option>Interest</option>
											<option>Mining</option>
											<option>Airdrop</option>
											<!-- Negative -->
											<option>Used for Payment</option>
											<option>Gave as Gift</option>
											<option>Sold for Local Currency</option>
											<option>Mining Fee for Wallet Transfer</option>
											<option>Lost or Stolen</option>
											<!-- Either -->
											<option>Conversion Between Cryptos</option>
											<option>Other</option>
										</select>
									</div>

									<!-- Date -->
									<div class="form-group">
										<label for="date" class="col-form-label">Date:</label>
										<input type="text" class="form-control" id="date" placeholder="yyyy/mm/dd" />
									</div>
									<!-- +/- radio buttons for adding or subtracting from ledger-->
									<div class="form-group">
										<label for="pos-or-neg" class="col-form-label">Adding or Subtracting from Ledger?</label>
										<br />
										<input type="radio" id="pos" name="pos-or-neg" value="pos" />
										<label for="pos">Adding</label>
										<input type="radio" id="neg" name="pos-or-neg" value="neg" />
										<label for="neg">Subtracting</label>
									</div>
									<div class="form-group">
										<label for="crypto-amount" class="col-form-label">Amount of Crypto:</label>
										<input type="number" step="any" min="0" class="form-control" id="crypto-amount" />
									</div>
									<div class="form-group">
										<label for="market-value" class="col-form-label">
											Amount of Local Currency:
											<br />(Including Fees)
										</label>
										<input type="number" step="any" min="0" class="form-control" id="market-value" />
									</div>
									<div class="form-group">
										<label for="notes" class="col-form-label">Notes:</label>
										<input type="text" class="form-control" id="notes" placeholder="Optional" />
									</div>
									<button type="submit" class="btn btn-primary">Submit</button>
									<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Gold & silver forms -->
		<div class="row text-center">
			<div class="pt-3 col-12 col-sm-6">
				<!-- Add metal form -->
				<div class="addMetalForm">
					<button
						type="button"
						class="btn btn-primary text-center"
						data-toggle="modal"
						data-target="#add-gold-or-silver-modal"
						data-whatever="@getbootstrap"
					>Add Metal</button>

					<div
						class="modal fade"
						id="add-gold-or-silver-modal"
						tabindex="-1"
						role="dialog"
						aria-labelledby="add-gold-or-silver-modal-label"
						aria-hidden="true"
					>
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="add-crypto-modal-label">Add Gold or Silver</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="text-left">
										<!-- Metal type -->
										<div class="form-group">
											<input type="radio" id="gold" name="type" value="Gold" />
											<label for="gold">Gold</label>
											<input type="radio" id="silver" name="type" value="Silver" />
											<label for="silver">Silver</label>
										</div>
										<!-- Measurement type -->
										<div class="form-group">
											<label for="measurement-type" class="col-form-label">Measurement Type:</label>
											<select class="form-control" id="measurement-type">
												<!-- Placeholder -->
												<option value disabled selected>-</option>
												<!-- Options -->
												<option>Grams</option>
												<option>Kilos</option>
												<option>Troy Ounces</option>
											</select>
										</div>
										<!-- Description -->
										<div class="form-group">
											<label for="description" class="col-form-label">Description:</label>
											<input type="text" class="form-control" id="description" placeholder="Optional" />
										</div>
										<!-- Image -->
										<div class="form-group">
											<label for="img" class="col-form-label">Image URL (Web Address):</label>
											<input type="text" class="form-control" id="img" placeholder="Optional" />
										</div>
										<!-- Notes -->
										<div class="form-group">
											<label for="notes" class="col-form-label">Notes:</label>
											<input type="text" class="form-control" id="notes" placeholder="Optional" />
										</div>
										<button type="submit" class="btn btn-primary">Submit</button>
										<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pt-3 col-12 col-sm-6">
				<div class="add-metal-tx-form">
					<button
						type="button"
						class="btn btn-primary text-center"
						data-toggle="modal"
						data-target="#add-metal-tx-modal"
						data-whatever="@getbootstrap"
					>Add Metal Transaction</button>
					<div
						class="modal fade"
						id="add-metal-tx-modal"
						tabindex="-1"
						role="dialog"
						aria-labelledby="add-tx-modal-label"
						aria-hidden="true"
					>
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<div class="modal-title" id="add-tx-modal-label">
										<h5>Add a Metal Transaction</h5>
									</div>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="text-left">
										<!-- "Which Metal?" dropdown -->
										<div class="form-group">
											<label for="which-crypto" class="col-form-label">Which Metal?</label>
											<select id="which-crypto" class="form-control">
												<option value disabled selected>-</option>
												<option>Add sample metal "names" + "-" + "descriptions"</option>
											</select>
										</div>

										<!-- Transaction type dropdown -->
										<div class="form-group">
											<label for="transaction-type" class="col-form-label">Type:</label>
											<select class="form-control" id="transaction-type">
												<!-- Placeholder -->
												<option value disabled selected>-</option>
												<!-- Positive -->
												<option>Purchased with Local Currency</option>
												<option>Income</option>
												<option>Earned as Payment</option>
												<option>Received as Gift</option>
												<option>Interest</option>
												<!-- Negative -->
												<option>Used for Payment</option>
												<option>Gave as Gift</option>
												<option>Sold for Local Currency</option>
												<option>Lost or Stolen</option>
												<!-- Either -->
												<option>Conversion Between Metals</option>
												<option>Other</option>
											</select>
										</div>

										<!-- Date -->
										<div class="form-group">
											<label for="date" class="col-form-label">Date:</label>
											<input type="text" class="form-control" id="date" placeholder="yyyy/mm/dd" />
										</div>
										<!-- +/- radio buttons for adding or subtracting from ledger-->
										<div class="form-group">
											<label for="pos-or-neg" class="col-form-label">Adding or Subtracting from Ledger?</label>
											<br />
											<input type="radio" id="pos" name="pos-or-neg" value="pos" />
											<label for="pos">Adding</label>
											<input type="radio" id="neg" name="pos-or-neg" value="neg" />
											<label for="neg">Subtracting</label>
										</div>
										<div class="form-group">
											<label for="metal-amount" class="col-form-label">
												Amount of Metal:
												<br />(Be sure to enter based on correct unit of measurement)
											</label>
											<input type="number" step="any" min="0" class="form-control" id="metal-amount" />
										</div>
										<div class="form-group">
											<label for="market-value" class="col-form-label">
												Amount of Local Currency:
												<br />(Including Fees)
											</label>
											<input type="number" step="any" min="0" class="form-control" id="market-value" />
										</div>
										<div class="form-group">
											<label for="notes" class="col-form-label">Notes:</label>
											<input type="text" class="form-control" id="notes" placeholder="Optional" />
										</div>
										<button type="submit" class="btn btn-primary">Submit</button>
										<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Currencies -->
		<div class="row">
			<div class="col pt-3">
				<p class="text-center">
					If your crypto's market value is higher than your averaged value,
					<br />you can transact without losing purchasing power.
				</p>
			</div>
		</div>
		<!-- Cryptos -->
		<div class="row pt-5">
			<!-- Sample crypto 1 -->
			<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
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
							<div class="col-12 text-center pt-1">Total owned: 1.23456789</div>
							<div class="col-12 text-center pt-1">
								Averaged Value Per Coin:
								<br />
								<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
								7624.62
							</div>
							<div class="col-12 pt-1">Notes: All wallets</div>
							<!-- Buttons -->
							<div class="col-12 pt-1">
								<div class="row">
									<div>
										<button class="btn btn-sm btn-primary ml-5 mr-4">
											<a
												target="_blank"
												href="https://coinmarketcap.com/currencies/bitcoin/"
												id="market-val-btn"
											>Market Value</a>
										</button>
									</div>
									<div>
										<router-link :to="{name: 'sampleCryptoLedger'}">
											<button class="btn btn-sm btn-primary">Ledger</button>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Sample crypto 2 -->
			<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
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
							<div class="col-12 text-center pt-1">Total owned: 1.23456789</div>
							<div class="col-12 text-center pt-1">
								Averaged Value Per Coin:
								<br />
								<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
								7624.62
							</div>
							<div class="col-12 pt-1">Notes: All wallets</div>
							<!-- Buttons -->
							<div class="col-12 pt-1">
								<div class="row">
									<div>
										<button class="btn btn-sm btn-primary ml-5 mr-4">
											<a
												target="_blank"
												href="https://coinmarketcap.com/currencies/bitcoin/"
												id="market-val-btn"
											>Market Value</a>
										</button>
									</div>
									<div>
										<router-link :to="{name: 'sampleCryptoLedger'}">
											<button class="btn btn-sm btn-primary">Ledger</button>
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Sample crypto 3 -->
			<div class="crypto-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
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
							<div class="col-12 text-center pt-1">Total owned: 1.23456789</div>
							<div class="col-12 text-center pt-1">
								Averaged Value Per Coin:
								<br />
								<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
								7624.62
							</div>
							<div class="col-12 pt-1">Notes: All wallets</div>
							<!-- Buttons -->
							<div class="col-12 pt-1">
								<div class="row">
									<div>
										<button class="btn btn-sm btn-primary ml-5 mr-4">
											<a
												target="_blank"
												href="https://coinmarketcap.com/currencies/bitcoin/"
												id="market-val-btn"
											>Market Value</a>
										</button>
									</div>
									<div>
										<router-link :to="{name: 'sampleCryptoLedger'}">
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
		<!-- Metals -->
		<div class="row pt-5">
			<!-- Sample gold -->
			<div class="metal-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h3 class="card-title">Gold</h3>
						<p>For saving</p>
						<img
							src="https://www.cryptonewsz.com/wp-content/uploads/2019/08/Bitcoin-BTC-1.jpg"
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
								Notes: Gold in
								<a target="_blank" href="https://monetary-metals.com/">Monetary Metals</a> account
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
										<router-link :to="{name: 'metalLedgerDemo'}">
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
			<div class="metal-comp col-12 col-md-6 col-lg-4 col-xl-4 pb-3">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h3 class="card-title">Silver</h3>
						<p>For spending</p>
						<img
							src="https://elevenews.com/wp-content/uploads/2018/04/Litecoin.jpg"
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
								<a href="https://silvertoken.com/index.html">Silver Token (SLVT)</a>
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
										<router-link :to="{name: 'metalLedgerDemo'}">
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
	</div>
</template>

<script>
export default {
	name: "homeViewDemo"
};
</script>

<style>
</style>