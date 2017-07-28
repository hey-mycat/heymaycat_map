<template>
	<div class="login-wrap">
		<form class="login">

			<label class="login-uname-wrap">
				用户名：<input class="login-uname" v-model="username" type="input" placeholder="请输入用户名" v-on:blur="handleUnameInputBlur"/>
			</label>
			<div class="login-tips">友情提示：3-16位字母数字下划线组合</div>

			<label class="login-upwd-wrap">
				密码：<input class="login-upwd" v-model="userpwd" type="input" placeholder="请输入密码" v-on:blur="handleUpwdInputBlur"/>
			</label>
			<div class="login-tips">友情提示：6-18位字母数字下划线组合</div>

			<input class="login-btn" type="button" value="登录" @click="handleLoginBtnClick"/>			
		</form>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				username: "",
				userpwd: "",
				isverified: {
					uname: false,
					upwd: false
				}
			}
		},
		methods: {

			handleUnameInputBlur: function() {
			
				this.isverified.uname = true;

				var reg = /^[a-z0-9_-]{3,16}$/;

				if( !reg.test(this.username) ) {
					alert("用户名不合法，请重新输入");
					this.isverified.uname = false;
				}
			},

			handleUpwdInputBlur: function() {
				
				this.isverified.upwd = true;

				var reg = /^[a-z0-9_-]{6,18}$/;

				if( !reg.test(this.userpwd) ) {
					alert("密码不合法，请重新输入");
					this.isverified.upwd = false;
				}

			},

			handleLoginBtnClick: function() {

				if( this.isverified.uname && this.isverified.upwd ) {
					alert("登录成功");
					this.$router.push({path: '/map', query: { username: this.username} });
				} else {
					alert("请填写合法的用户名或密码");
				}

			},

		}
	}

</script>

<style scoped>
	.login-wrap {
		width: 380px;
		height: 500px;
		background: #eee;
		margin: 20px auto;
		padding: 15px;
		border-radius: 13px;
	}
	.login-uname-wrap,
	.login-upwd-wrap {
		display: block;
		heigth: 40px;
		line-height: 40px;
		margin-bottom: 5px;
		padding-left: 10px;
	}
	.login-btn {
		display: block;
		width: 80px;
		height: 30px;
		border: 0;
		border-radius: 4px;
		margin-top: 5px;
		cursor: pointer; 
		outline: none;
		background-color: #36c;
		color: #fff;
	}
	.login-tips {
		padding: 5px 10px;
		color: #36c;
	}
</style>
