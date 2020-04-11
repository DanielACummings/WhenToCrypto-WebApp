<template>
	<div id="app">
		<navbar />
		<h5 id="beta" class="text-left pt-5 pl-5">BETA VERSION</h5>
		<router-view />
		<info />
	</div>
</template>

<script>
import navbar from "@/components/Navbar";
import info from "@/components/Info";

export default {
	name: "App",
	components: {
		navbar,
		info
	}
};
</script>

<style>
#app {
	/* font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale; */
	text-align: center;
	/* color: #2c3e50; */
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

body {
	background: black;
	color: white;
}
</style>