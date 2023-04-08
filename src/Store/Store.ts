import axios from 'axios'
import { defineStore } from 'pinia'
export type  ProdType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
    rate: number,
    count: number
    }
    quantity : number
}
export const useCategoriesStore = defineStore('categories', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            products: [] as ProdType[],
            singleProduct: {} as ProdType,
            loading: false 
        }
    },
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        async getProducts(type:string, id:string) {
            this.loading = true
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}/${type}`)
            this.products = data
            this.loading = false
            console.log(this.products);
        },
        async getSingleProduct(id:number) {
            this.loading = true
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            this.singleProduct = data
            this.loading = false
            console.log(this.singleProduct);
        },
    },

})
