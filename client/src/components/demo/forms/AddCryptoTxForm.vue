<template>
	<form class="text-left">
		<!-- "Which Crypto?" dropdown -->
		<div class="form-group">
			<label for="which-crypto" class="col-form-label">Which Crypto?</label>
			<select id="which-crypto" class="form-control">
				<option value disabled selected>-</option>
				<option>Bitcoin - #1</option>
				<option>Litecoin - The silver to Bitcoin's gold</option>
				<option>Zcash - Anonymous crypto</option>
			</select>
		</div>

		<!-- Transaction type dropdown -->
		<div class="form-group">
			<label for="transaction-type" class="col-form-label">Type:</label>
			<select class="form-control" id="transaction-type" required>
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
			<input type="text" class="form-control" id="date" placeholder="yyyy/mm/dd" required />
		</div>
		<!-- +/- radio buttons for adding or subtracting from ledger-->
		<div class="form-group">
			<label for="pos-or-neg" class="col-form-label">Adding or Subtracting from Ledger?</label>
			<br />
			<input type="radio" id="pos" name="pos-or-neg" value="pos" required />
			<label class="pr-4" for="pos">Adding</label>
			<input type="radio" id="neg" name="pos-or-neg" value="neg" />
			<label for="neg">Subtracting</label>
		</div>
		<div class="form-group">
			<label for="crypto-amount" class="col-form-label">Amount of Crypto:</label>
			<input type="number" step="any" min="0" class="form-control" id="crypto-amount" required />
		</div>
		<div class="form-group">
			<label for="market-value" class="col-form-label">
				Amount of Local Currency:
				<br />(Including Fees)
			</label>
			<input type="number" step="any" min="0" class="form-control" id="market-value" required />
		</div>
		<div class="form-group">
			<label for="notes" class="col-form-label">Notes:</label>
			<input type="text" class="form-control" id="notes" placeholder="Optional" />
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
		<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
	</form>
</template>

<script>
export default {
	name: "addCryptoTxForm"
};
</script>