class Grocery {
    private price: number;

    get quantity(): any {
        return this._quantity;
    }

    set quantity(value: any) {
        this._quantity = value;
    }

    private name: any;
    private _quantity: any;

    constructor(name, quantity, price) {
        this.name = name;
        this._quantity = quantity;
        this.price = price
    }
}



window.onload = ()=>{
    const items = ["banana", "apple", "pineapple"]
    const groceryList = []
    for (let i = 0; i < items.length; i++) {
        const item = new Grocery(items[i], 1, 9.99);
        groceryList.push(item);
    }

    groceryList.forEach(item => {
        console.log(item.name)
        document.body.append(`name: ${item.name}, quantity: ${item.quantity}, price: ${item.price}`)
    })
}
