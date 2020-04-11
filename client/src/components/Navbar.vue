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
			<ul class="navbar-nav mr-auto">
				<!-- <li>s shown on login page -->

				<!-- <li>s shown when logged in -->
				<li
					v-show="this.$route.name != 'login'"
					class="nav-item"
					:class="{ active: $route.name == 'home' }"
				>
					<router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
				</li>
				<li
					v-show="this.$route.name != 'login'"
					class="nav-item"
					:class="{ active: $route.name == 'ledgers' }"
				>
					<router-link class="nav-link" :to="{ name: 'ledgers' }">Ledgers</router-link>
				</li>
			</ul>
			<span v-show="this.$route.name != 'login'" class="navbar-text">
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
	}
};
</script>

<style></style>
