import tacos from "../../public/images/tacos/tacos.png";
import shawarma from "../../public/images/tacos/shawarma.png";
import burgerclassic from "../../public/images/burgers/classic burger.png";
import burger2 from "../../public/images/burgers/burger.png"
const popularDishesData = [
  {
    id: 1,
    category: "Burgers",
        name: "Chicken Burger",
        price: "38.00 DH",
        description: "Crispy fried chicken breast with mayo.",
        image: burger2,
  },
  {
    id: 2,
    category: "Tacos",
        name: "Shawarma",
        price: "35.00 DH",
        description: "Spiced meat wrapped in flatbread with tahini sauce.",
        image: shawarma,
  },
  {
    id: 3,
    category: "Burgers",
        name: " Classic Burger",
        price: "35.00 DH",
        description: "Grilled beef patty, cheddar cheese, lettuce, tomato.",
        image: burgerclassic,
  },
];
export default popularDishesData