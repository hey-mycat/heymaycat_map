<template>
	<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" :scroll-wheel-zoom="true" @click="handleMapClick">
		<bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="false" @lineupdate="updatePolygonPath"/>
		<div class="username">用户名：{{this.username}}</div>
	</baidu-map>
</template>

<script>

	export default {

		data () {
			return {
				polygonPath: [],
				username: this.$route.query.username
			}
		},
		methods: {

		    updatePolygonPath (e) {
		      	this.polygonPath = e.target.getPath()
		    },

		    handleMapClick(e) {
		    	this.polygonPath.push(e.point);
		    }

 		}
	}
</script>

<style scoped>
	.map {
		width: 100%;
		height: 100%;
	}
	.username {
		position: fixed;
		right: 20px;
		top: 20px;
		width: 100px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: rgba(255, 234, 210, 0.7);
		border-radius: 5px;
		z-index: 900;		
	}
</style>