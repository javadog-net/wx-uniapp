// prod-生产 local-本地  dev-开发
const env = "local"

const prod = {
	baseUrl: 'http://localhost:9001/wx/v1', // 线上环境'
	appId: 'xxxxxxxxxxxxxxxxxxxx'
}
const dev = {
	baseUrl: 'http://localhost:7001/wx/v1', // 开发环境'
	appId: 'xxxxxxxxxxxxxxxxxxxx'
}
const local = {
	baseUrl: 'http://localhost:8001/wx/v1', // 本地环境'
	appId: 'xxxxxxxxxxxxxxxxxxxx'
}

const config = {
	dev,
	prod,
	local,
}

export default config[env]
