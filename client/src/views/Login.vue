<template>
	<div class="login">
		<h1 class="pt-5">WhenToCrypto</h1>
		<p class="pb-5">Only spend your cryptocurrency when it's worth more than you paid for it</p>
		<form v-if="loginForm" @submit.prevent="loginUser">
			<input class="mb-1" type="email" v-model="creds.email" placeholder="Email" />
			<br />
			<input class="mb-1" type="password" v-model="creds.password" placeholder="Passphrase" />
			<br />
			<button class="btn btn-warning" type="submit">Login</button>
		</form>
		<form v-else @submit.prevent="register">
			<br />
			<input class="mb-1" type="text" v-model="newUser.name" placeholder="Name" />
			<br />
			<input class="mb-1" type="email" v-model="newUser.email" placeholder="Email" />
			<br />
			<input class="mb-1" type="password" v-model="newUser.password" placeholder="Passphrase" />
			<br />
			<button class="btn btn-warning" type="submit">Create Account</button>
		</form>
		<div class="action" @click="loginForm = !loginForm">
			<p v-if="loginForm">No account? Click here to Register</p>
			<p v-else>Already have an account? Click here to Login</p>
		</div>
	</div>
</template>

<script>
import router from "@/router/index.js";
export default {
	name: "login",
	data() {
		return {
			loginForm: true,
			creds: {
				email: "",
				password: ""
			},
			newUser: {
				email: "",
				password: "",
				name: ""
			}
		};
	},
	beforeCreate() {
		if (this.$store.state.user._id) {
			this.$router.push({ name: "home" });
		}
	},
	methods: {
		register() {
			this.$store.dispatch("register", this.newUser);
		},
		loginUser() {
			this.$store.dispatch("login", this.creds);
		}
	}
};
</script>

<style>
.action {
	cursor: pointer;
}
.login {
	color: #375a7f;
}
</style>