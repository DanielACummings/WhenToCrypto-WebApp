<template>
	<tr class="transaction">
		<td>{{txProp.date}}</td>
		<td>{{txProp.transactionType}}</td>
		<td>{{txProp.cryptoAmount}}</td>
		<td>
			<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
			{{txProp.marketValue}}
		</td>
	</tr>
</template>
<script>
export default {
	name: "transaction",
	props: ["txProp"]
};
</script>

<style>
#curr-symbol {
	display: inline;
	margin-right: -3px;
	color: white;
}
</style>