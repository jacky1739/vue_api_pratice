let productModal = null;
let delProductModal = null;

Vue.createApp({
    data(){
        return {
            // api_path = 'jacky',
            // base_url = 'https://vue3-course-api.hexschool.io/',
            products: [],
            isNew: false,  //是否是新的 
            tempProduct: {
                imagesUrl: [],
            }
        }
    },
    methods: {
        getData(){
            const api_path = 'jacky';
            const base_url = 'https://vue3-course-api.hexschool.io/';

            axios.get(`${base_url}api/${api_path}/admin/products`).then((res) => {
                console.log(res);
                this.products = res.data.products;
                console.log(this.products);
            })
        },
        updateProduct(){
            let url = `${base_url}/${api_path}/admin/product`;
            let http = 'post';

            if(!this.isNew){
                url = `${base_url}/${this.api_path}/admin/product/${this.tempProduct.id}`;
                http = 'put';
            }

            console.log('click');
        },
        openModal(isNew, item){
            console.log(isNew, item);
            switch(isNew) {
                case 'new':
                    this.tempProduct = {
                        imagesUrl: [],
                    };
                    this.isNew = true;
                    productModal.show();
                    break;
                case 'edit':
                    this.tempProduct = {...item};
                    this.isNew = false;
                    productModal.show();
                    break;
                case 'delete':
                    this.tempProduct = {...item};
                    this.isNew = false;
                    delProductModal.show();
                    break;
            }
        },
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
    }
}).mount("#app")