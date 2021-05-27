let productModal = null;
let delProductModal = null;

Vue.createApp({
    data(){
        return {
            products: [],
            isNew: false,
            tempProduct: {
                imagesUrl: [],
            }
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
        // renderList() {
            
        // },
        openModal(){
            console.log('click');
            productModal.show();
        },
        click() {
            console.log('click');
        }
    },
    mounted() {
        productModal = new bootstrap.Modal(document.getElementById('productModal'), {
            keyboard: false
        });

        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
            keyboard: false
        });

        let token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        console.log(token);
        this.getData();
        // this.openModal();
    }
}).mount("#app")