<template>
	<div class="crypto-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h3 class="card-title">{{cryptoProp.name}}</h3>
				<p>{{cryptoProp.description}}</p>
				<img :src="cryptoProp.img" class="card-img" alt="crypto image" />
				<div class="col-12 text-center pt-1">Averaged Value:</div>
				<div class="row text-center pt-1">
					<div class="col">
						<button class="btn btn-sm btn-warning">
							<a target="_blank" :href="baseURL + cryptoProp.name">Current Market Value</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "cryptocurrency",
	props: ["cryptoProp"],
	data() {
		return {
			baseURL: "https://coinmarketcap.com/currencies/"
		};
	},
	methods: {
		test() {}
	}
};
</script>
<style>
</style>