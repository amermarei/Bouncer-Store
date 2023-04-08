import { defineStore } from 'pinia';
import {ProdType} from './Store'
export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            testCart: JSON.parse(localStorage.getItem("cart")|| '[]') as ProdType[] ,
            quantity: 1
        }
    },
    getters: {
        totalCount: (state) => state.testCart.reduce(function(acc:number,product: {price : number , quantity : number}) : number {
            acc += product.price * product.quantity;
            return acc
        }, 0),
    },
    actions: {
        addToCart(item) {
            let index = this.testCart.find(function (product: {id : number|Boolean}): number |Boolean {
               return product.id === item.id
            } );
            if (index) {
                index.quantity += 1;

            } else {
                item.quantity = this.quantity;
                this.testCart.push(item);

            }
            localStorage.setItem('cart', JSON.stringify(this.testCart));
        },
        incremQuantity(item:{id:number}) {
            let index = this.testCart.find(function (product: { id: number | Boolean }): number | Boolean{
               return product.id === item.id
            });
            if (index) {
                index.quantity += 1;
            }
            this.quantity += 1
            localStorage.setItem('cart', JSON.stringify(this.testCart));
        },
        decremQuantity(item:{id:number}) {
            let index = this.testCart.find(function (product: { id: number | Boolean }): number | Boolean {
                return product.id === item.id
            });
            if (index) {
                index.quantity -= 1;
            }
            this.quantity -= 1
            localStorage.setItem('cart', JSON.stringify(this.testCart));
        },
        removeProduct(item:{id:number}) {
            this.testCart = this.testCart.filter(function (product: { id: number | Boolean }): number | Boolean {
                return product.id !== item.id
            });
            localStorage.setItem('cart', JSON.stringify(this.testCart));
        }


    },

})
