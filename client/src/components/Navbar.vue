<template>
	<nav
		v-if="this.$route.name != 'login'"
		class="navbar navbar-expand-sm navbar-dark border-bottom"
		style="background-color: #000;"
	>
		<router-link class="navbar-brand" :to="{ name: 'home' }">WhenToCrypto</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item" :class="{ active: $route.name == 'home' }">
					<router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item" :class="{ active: $route.name == 'dashboard' }">
					<router-link class="nav-link" :to="{ name: 'dashboard' }">Dashboard</router-link>
				</li>
			</ul>
			<span class="navbar-text">
				<button @click="logout" class="btn btn-secondary text-right">Logout</button>
			</span>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	methods: {
		logout() {
			this.$store.dispatch("logout");
		}
	}
};
</script>

<style>
.console-green {
	color: #0f0;
}
</style>
