<template>
	<div class="keep-comp col-4 pb-3">
		<div class="card" style="width: 18rem;">
			<img :src="cryptoProp.img" class="card-img-top" alt="image" />
			<div class="card-body">
				<router-link :to="{name: 'keep', params: {id: cryptoProp.id}}">
					<h5 class="card-title">{{cryptoProp.name}}</h5>
					<p>{{cryptoProp.description}}</p>
				</router-link>
				<div class="row">
					<div class="col-3">
						<router-link :to="{name: 'keep', params: {id: cryptoProp.id}}">
							<button @click="increaseViewsCount()" class="btn btn-sm btn-primary">View</button>
						</router-link>
					</div>
					<div class="col-3">
						<div class="dropdown">
							<button
								v-if="this.$route.name !== 'vault'"
								class="btn btn-primary btn-sm dropdown-toggle"
								type="button"
								data-toggle="dropdown"
							>
								Keep
								<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<div v-for="vault in vaults" :key="vault.id">
									<button
										class="dropdown-item"
										@click="createVaultKeep(vault.id); increaseKeepsCount();"
									>{{vault.name}}</button>
								</div>
							</ul>
						</div>
					</div>
					<div class="col-3">
						<button
							v-if="this.$route.name === 'vault'"
							@click="deleteVaultKeep"
							class="btn btn-sm btn-warning"
						>Remove</button>
					</div>
					<div class="col-3">
						<button
							v-if="this.$route.name !== 'home'"
							@click="deleteKeep"
							type="delete"
							class="btn btn-sm btn-danger"
						>Delete</button>
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