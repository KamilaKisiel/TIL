//script1.js
export const add = (a, b) => a + b;
//or
export default function add() {
    return a +b;
}

//script2.js
import { add } from './add';
//or
import add from './add'; //if exported by default we don't need to use brackets
