let productModal;
let delProductModal;

Vue.createApp({
    data(){
        return {
            products: [],
        }
    },
    methods: {
        getData(){
            const api_path = 'jacky';
            const url = 'https://vue3-course-api.hexschool.io/';
            
            axios.get(`${url}api/${api_path}/admin/products`).then((res) => {
                console.log(res);
                this.products = res.data.products;
                console.log(this.products);
            })
        },
        renderList() {
            
        },
        openModal(){

        }
    },
    mounted() {
        let token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        console.log(token);
        this.getData();
    }
}).mount("#app")