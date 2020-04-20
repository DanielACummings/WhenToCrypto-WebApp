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
	text-align: center;
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
	background: rgb(46, 43, 43);
	color: white;
}
</style>