<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-primary">
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
			<!-- <ul> shown on login page -->
			<ul v-if="this.$route.name == 'login' || this.$route.name == 'about'" class="navbar-nav mr-auto">
				<li class="nav-item" :class="{ active: $route.name == 'login' }">
					<router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
				</li>
				<li class="nav-item" :class="{ active: $route.name == 'about' }">
					<router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
				</li>
			</ul>
			<!-- <ul> shown when logged in -->
			<ul v-if="this.$route.name != 'login' && this.$route.name != 'about'" class="navbar-nav mr-auto">
				<li class="nav-item" :class="{ active: $route.name == 'home' }">
					<router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item" :class="{ active: $route.name == 'features' }">
					<router-link :to="{ name: 'features' }" class="nav-link">Planned Features</router-link>
				</li>
				<li class="nav-item" :class="{ active: $route.name == 'whyUseCrypto' }">
					<router-link class="nav-link" :to="{ name: 'whyUseCrypto' }">Why Use Crypto?</router-link>
				</li>
			</ul>
			<span v-if="this.$route.name != 'login' && this.$route.name != 'about'" class="navbar-text">
				<button @click="logout" class="btn btn-success text-right">Logout</button>
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
	},
	computed: {
		user() {
			return this.$store.state.user.email;
		}
	}
};
</script>

<style></style>
