<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    }
    
</script>

<style scrop>

	@import "./assets/css/reset.css";

	body {
		height: 100%;
	}
	#app {
		width: 100%;
		height: 100%;
	}
</style>
