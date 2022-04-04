
class Validator{

    constructor(){
        this.errors = [];
    }

    static Rule(_callBack) {
        const validator = new Validator();
        _callBack(validator);
        return validator;
    }

    validate(){
        return this.errors;
    }

    input=(_input)=>{
        this._input = _input;
        this._inputErr = [];
        return this;
    }

    isArray=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        else if(!Array.isArray(this._input)){
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        return this;
    }

    isNumber=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        else if(isNaN(this._input)){
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        return this;
    }

    isEmpty=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        else if(this._input==""){  
            this._inputErr.push(_msg);
            this.errors[this._input] = this._inputErr;
        }
        return this;
    }

    customFunction=(_callback)=>{
        _callback(this);
        return this;
    }

    setError=(_msg)=>{
        this._inputErr.push(_msg);
        this.errors[this._input] = this._inputErr;
    }
}

const v = Validator.Rule(
    validator=>{
        validator.input("hello")
        .isArray("no array")
        .isNumber("no number")
        .isEmpty("no number")
        .customFunction(function(x){
            x.setError("hoho");
        });

        validator.input("test")
        .isArray("no array")
        .isNumber("no number")
        .isEmpty("no number")
        .customFunction(function(x){
            x.setError("hoho");
        });

    }
);
console.log(v.validate()); 