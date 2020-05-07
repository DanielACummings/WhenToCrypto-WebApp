<template>
	<tr class="metal-tx">
		<td>{{metalTxProp.date}}</td>
		<td>{{metalTxProp.txType}}</td>
		<td>{{metalTxProp.metalAmount}}</td>
		<td>
			<a href="https://www.symbols.com/symbol/currency-sign" target="blank_" id="curr-symbol">¤</a>
			{{metalTxProp.marketValue}}
		</td>
		<td>{{metalTxProp.notes}}</td>
	</tr>
</template>
<script>
export default {
	name: "metalTx",
	props: ["metalTxProp"]
};
</script>

<style scoped>
#curr-symbol {
	display: inline;
	margin-right: -3px;
	color: white;
}
</style>