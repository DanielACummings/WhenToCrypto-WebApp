<template>
	<div class="crypto-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<h3 class="card-title">{{cryptoProp.name}}</h3>
			<img :src="cryptoProp.img" class="card-img-top" alt="image" />
			<div class="card-body">
				<p>{{cryptoProp.description}}</p>
				<div class="row">
					<div class="col-3">
						<button class="btn btn-sm btn-primary">View</button>
					</div>
					<div class="col-3">
						<button class="btn btn-sm btn-warning">Remove</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 text-center">
					Views: {{cryptoProp.views}} -
					Keeps: {{cryptoProp.keeps}}
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
		return {};
	},
	methods: {}
};
</script>
<style>
</style>