import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class ShoppingCart {

    items: ShoppingCartItem[] = [];

    constructor(private itemsMap?: { [key: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        console.log('AAAAAAAAAAAAAAAAAAAAa', this.items);
        for (let productId in itemsMap) {
            console.log('BBBBBBBBBBBB', productId);
            let item = itemsMap[productId];

            this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
        }
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }
}