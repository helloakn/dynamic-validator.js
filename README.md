# DynamicValidator
[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FDynamicValidator)](https://github.com/helloakn/DynamicValidator) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FDynamicValidator)](https://github.com/helloakn/DynamicValidator) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FDynamicValidator)](https://github.com/helloakn/DynamicValidator)

npm validator

## Syntax
```javascript
validator.input("value to validate")->functions();
```

## Example
```javascript
const {Validator} = require('DynamicValidator');

const v = Validator.Rule(
    validator=>{
        validator.input("test1","hello")
        .isArray("no array")
        .isNumber("no number")
        .isEmpty("no number")
        .customFunction(function(x){
            x.setError("hoho");
        });

        validator.input("test2","test")
        .isArray("no array")
        .isNumber("no number")
        .isEmpty("no number")
        .customFunction(function(x){
            x.setError("hoho");
        });
    }
);
if(!v.validate()){
  console.log(v.errors);
}
```
## Function List
Function | #Remark
--- | --- 
isArray | # validator.isArray('Error Message');
isNumber | # validator.isNumber('Error Message');
isEmpty | # validator.isEmpty('Error Message');
isEmail | # validator.isEmail('Error Message');