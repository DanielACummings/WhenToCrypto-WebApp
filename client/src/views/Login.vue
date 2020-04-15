<template>
	<div class="login container">
		<h1 class="pt-5">WhenToCrypto</h1>
		<p class="pb-5">Only spend or sell your cryptocurrency when it's worth more than you paid for it</p>
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
		<div class="action pb-2" @click="loginForm = !loginForm">
			<p v-if="loginForm">No account? Click here to Register</p>
			<p v-else>Already have an account? Click here to Login</p>
		</div>
		<div class="pb-5">Can't log in? Please email whentocrypto@protonmail.com</div>
		<!-- Why Crypto section -->
		<div class="row pt-5">
			<div class="col-12">
				<h4>Not Sure About Crypto?</h4>
			</div>
			<div class="col-12 pb-5">
				<p>Here's why you should use it:</p>
				<div class="col-12 pb-5 embed-responsive embed-responsive-16by9">
					<iframe
						src="https://player.vimeo.com/video/295145578?app_id=122963"
						width="560"
						height="315"
						frameborder="0"
						allow="autoplay; fullscreen"
						allowfullscreen
						title="Bitcoin - Blockchain explainer"
					></iframe>
				</div>
				<div class="col-12 mt-5 pt-5">
					<p>Here's how it works:</p>
					<div class="row">
						<div class="col-12 col-xl-6 mt-4 pb-5 embed-responsive embed-responsive-16by9">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube-nocookie.com/embed/l9jOJk30eQs"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div class="col-12 col-xl-6 mt-4 pb-5 embed-responsive embed-responsive-16by9">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube-nocookie.com/embed/Lx9zgZCMqXE"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
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
</style>