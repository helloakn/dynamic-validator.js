# Validator
[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FValidator)](https://github.com/helloakn/Validator) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FValidator)](https://github.com/helloakn/Validator) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2FValidator)](https://github.com/helloakn/Validator)

npm validator

## Syntax
```javascript
validator.input("value to validate")->functions();
```

## Example
```javascript

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
isArray | check the input value
isNumber | #
isEmpty | # if the input value is undefined or null or empty
isEmail | #