<template>
	<tr class="cryptoTransaction">
		<td>{{cryptoTxProp.date}}</td>
		<td>{{cryptoTxProp.transactionType}}</td>
		<td>{{cryptoTxProp.cryptoAmount}}</td>
		<td>
			<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
			{{cryptoTxProp.marketValue}}
		</td>
		<td>{{cryptoTxProp.notes}}</td>
	</tr>
</template>
<script>
export default {
	name: "cryptoTransaction",
	props: ["cryptoTxProp"]
};
</script>

<style scoped>
#curr-symbol {
	display: inline;
	margin-right: -3px;
	color: white;
}
</style>