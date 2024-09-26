// script.js

// 導出一個函數
export function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 導入另一個模組（假設您有另一個名為 `utils.js` 的模組）
import { someUtilityFunction } from './utils.js';

// 使用導入的函數
someUtilityFunction();
