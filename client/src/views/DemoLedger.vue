<template>
	<div class="demo-ledger container">
		<div class="row">
			<div class="col-12">
				<h1 class="pt-5 pb-5">(Currency) Transaction History</h1>
			</div>
			<div class="col-12">
				<p>The column header for "Amount" will look like this for metal ledgers: Amount (unit of measurement)</p>
				<table border="2">
					<tr>
						<th>Date</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Local Curr. Val.</th>
						<th>Notes</th>
					</tr>
					<tr>
						<td>2020/01/02</td>
						<td>Used for Payment</td>
						<td>-0.00163136</td>
						<td>
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>$15.47
						</td>
						<td>Bought dinner</td>
					</tr>
					<tr>
						<td>2020/03/04</td>
						<td>Purchased with Local Currency</td>
						<td>0.01085422</td>
						<td>
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>100
						</td>
						<td>From Coinbase</td>
					</tr>
					<tr>
						<td>2020/05/06</td>
						<td>Conversion Between Cryptos</td>
						<td>-0.00685419</td>
						<td>
							<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>63.07
						</td>
						<td>Converted to Ravencoin</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "demoLedger"
};
</script>

<style scoped>
#curr-symbol {
	display: inline;
	margin-right: 1px;
	color: white;
}
</style>