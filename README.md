# Dynamic Validator in JS
[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fdynamic-validator.js)](https://github.com/helloakn/dynamic-validator.js) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fdynamic-validator.js)](https://github.com/helloakn/dynamic-validator.js) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Fdynamic-validator.js)](https://github.com/helloakn/dynamic-validator.js)

npm package for easy validation in javascript.

## Installation
```
npm install dynamic-validator.js
```
## Syntax
```javascript
Validator.Rule(validator=>{
    ... conditions here ...
});
// ---
Validator.Rule(validator=>{
    // validator.input(key,value)
    
});

```

## Example
```javascript
const {Validator} = require('dynamic-validator.js');

let _id = "";
const v = Validator.Rule(
    validator=>{

        validator.input("id",_id)
                .isNumber("Id should be number")
                .isEmpty("Id should not be empty");

    }
);
if(!v.validate()){
  console.log(v.errors);
}
```
#### output
```javascript
{
    "id": [
        "Id should be number",
        "Id should not be empty"
    ]
}
```
## Function List
Function | #Remark
--- | --- 
isArray | # validator.isArray('Error Message');
isNumber | # validator.isNumber('Error Message');
isEmpty | # validator.isEmpty('Error Message');
isEmail | # validator.isEmail('Error Message');
isAllNumberinArray | # validator.isAllNumberinArray('is not number');
isDate | # to check valid date