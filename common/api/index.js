const http = uni.$u.http
const api = {

    /**
     * 登录
     */
    login(params) {
        return http.get('/login', {params})
    }
}

export default api;
