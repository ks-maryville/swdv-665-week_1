var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this._quantity = quantity;
        this.price = price;
    }
    Object.defineProperty(Grocery.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    return Grocery;
}());
window.onload = function () {
    var items = ["banana", "apple", "pineapple"];
    var groceryList = [];
    for (var i = 0; i < items.length; i++) {
        var item = new Grocery(items[i], 1, 9.99);
        groceryList.push(item);
    }
    groceryList.forEach(function (item) {
        console.log(item.name);
        document.body.append("name: ".concat(item.name, ", quantity: ").concat(item.quantity, ", price: ").concat(item.price));
    });
};
