<template>
	<!-- 授权页 -->
	<view class="main">
		<pre>{{userInfo}}</pre>
	</view>


</template>

<script>
	export default {

		data() {
			return {
				// 用户信息
				userInfo: {}
			}
		},
		onLoad() {
			// 从浏览器获取code
			let code = this.getUrlCode('code');
			if (!code) {
				// 授权
				this.auth()
			} else {
				this.login(code);
			}

			window.onpageshow = function(evt) {
				setTimeout(function() {
					if (evt.persisted) {
						location.reload(true);
					}
				});
			}
		},
		onShow() {},

		methods: {
			// 授权
			auth() {
				//获取当前页面地址作为回调地址
				let local = encodeURIComponent(window.location.href);

				// 这里填写自己微信公众号的appid
				let appid = this.$config.appId

				//通过微信官方接口获取code之后，会重新刷新设置的回调地址【redirect_uri】,之后会继续进入到onload()方法
				location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid + "&redirect_uri=" +
					local + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect"
			},
			// 从地址栏提取code
			getUrlCode(key) {
				return decodeURIComponent((new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [,
						''
					])[1]
					.replace(/\+/g, '%20')) || null
			},
			// 登录
			async login(code) {
				const res = await this.$api.login({
					code
				})
				if (!res.success) {
					uni.$u.toast(res.message)
					return
				}
				// 用户信息
				this.userInfo = res.data;
			}
		}

	}
</script>

<style>
</style>
