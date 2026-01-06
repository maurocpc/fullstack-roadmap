// We define the 'Shape' of our object using an 'interface'
// This is a TypeScript best practice!
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

// Now we create the actual object using that interface
const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99,
    inStock: true
};

console.log(`Product: ${laptop.name} costs $${laptop.price}`);

// An array of Product objects
const inventory: Product[] = [
    { id: 1, name: "Keyboard", price: 50, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Monitor", price: 300, inStock: true }
];

// Let's find only the items that are in stock
const availableItems = inventory.filter(item => item.inStock === true);

console.log("Available items:", availableItems);