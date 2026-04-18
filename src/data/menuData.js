import burgerclassic from "../../public/images/burgers/classic burger.png"
import pizza1 from "../../public/images/pizza/Margherita Pizza.png"
import tacos from "../../public/images/tacos/tacos.png"
import Lemonade from "../../public/images/drinks/Fresh Lemonade.png"
import orange from "../../public/images/drinks/Fresh Orange Juice.png"
import cola from "../../public/images/drinks/cola.png"
import pizza from "../../public/images/pizza/Pepperoni Pizza.png"
import burger from "../../public/images/burgers/burger.png"
import shawarma from "../../public/images/tacos/shawarma.png"
const menuItems = [
  {
    id: 1,
    category: "Burgers",
    name: " Classic Burger",
    price: "35.00 DH",
    description: "Grilled beef patty, cheddar cheese, lettuce, tomato.",
    image: burgerclassic,
  },
  {
    id: 2,
    category: "Pizza",
    name: "Margherita Pizza",
    price: "50.00 DH",
    description: "Classic pizza with Margherita and fresh basil.",
    image: pizza1,
  },
  {
    id: 3,
    category: "Tacos",
    name: "Tacos Mix",
    price: "50.00 DH",
    description: 
    "Tacos mix, with Chicken + Beef and salsa.",
    image: tacos,
  },
  {
    id: 4,
    category: "Drinks",
    name: "Fresh Lemonade",
    price: "22.00 DH",
    description: "Refreshing lemonade with mint.",
    image: Lemonade,
  },
  {
    id: 5,
    category: "Pizza",
    name: "Pepperoni Pizza",
    price: "60.00 DH",
    description: "Loaded with pepperoni and mozzarella cheese.",
    image: pizza,
  },
  {
    id: 6,
    category: "Burgers",
    name: "Chicken Burger",
    price: "38.00 DH",
    description: "Crispy fried chicken breast with mayo.",
    image: burger,
  },
  {
    id: 7,
    category: "Drinks",
    name: "Fresh Orange Juice",
    price: "15.00 DH",
    description: "Refreshing orange juice.",
    image: orange,
  },
  {
    id: 8,
    category: "Drinks",
    name: "Coca-Cola",
    price: "10.00 DH",
    description: "Coca-Cola drink with ice cubes.",
    image: cola,
  },
  {
    id: 9,
    category: "Tacos",
    name: "Beef Tacos",
    price: "45.00 DH",
    description: 
    "Tacos mix, with seasoned beef and salsa.",
    image: tacos,
  },
  {
    id: 10,
    category: "Tacos",
    name: "Shawarma",
    price: "35.00 DH",
    description: "Spiced meat wrapped in flatbread with tahini sauce.",
    image: shawarma,
  }

];
export default menuItems;