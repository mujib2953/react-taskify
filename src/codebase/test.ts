let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

role = [42, "Age of programming language"];

// --- Old way
// ! NOT RECOMMENDED
let person_: Object;

// --- New way
// * RECOMMENDED WAY
type Person = {
    name: string;
    age?: number; // ? is used for an optional parameter
};
let person: Person = {
    name: "Chadd Derby",
    age: 33,
};

// --- Other way
interface PersonInterface {
    name: string;
    age: number;
}
let person_2: PersonInterface = {
    name: "Michael Jackdad",
    age: 35,
};

// -------------------------------------------------
let lotsOfPerson: Person[];

let amount: number | string;
amount = 26;
amount = "Twenty Six";

// --------------------------------------------------
let printName_: Function; // ! NOT RECOMMENDED

let printName: (name: string) => void = (name) => {
    console.log(name);
};

// --------------------------------------------------
// ? instead of "any" we can use bettre approach is by using "unknown"
let userInput: unknown;

userInput = 1;
userInput = "One";
userInput = true;
userInput = [];

// --------------------------------------------------
let calculateTax: (amount: number) => void;
// ? Instead of using "void" we can also use of "never"
// ? As "void" returns undefined, but "never" does not returns anything

let calculateTaxNew: (amount: number) => never;
// --------------------------------------------------

type Dimention_2_point = {
    x: number;
    y: number;
};

type Dimention_3_point = Dimention_2_point & {
    z: number;
};

let d3_point: Dimention_3_point = {
    x: 1,
    y: 2,
    z: 3,
};

interface d1 {
    x: number;
}

interface d2 extends d1 {
    y: number;
}

interface d3 extends d2 {
    z: number;
}

let point: d3 = {
    x: 1,
    y: 2,
    z: 3,
};

export default {};
