import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply, divide } from "./utils";

console.log("TESTE1");

const freya = new Dog("Freya", "aussie", 1);
freya.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Springs Shelter");
