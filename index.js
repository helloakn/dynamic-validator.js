class Validator{

    constructor(){
        this.errors = {};
    }
  
    static Rule(_callBack) {
        const validator = new Validator();
        _callBack(validator);
        return validator;
    }
  
    validate(){
        return (this.errors.length>0);
    }
  
    input=(_key,_input)=>{
        this._input = _input;
        this._key = _key;
        this._inputErr = [];
        return this;
    }
  
    isArray=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        else if(!Array.isArray(this._input)){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        return this;
    }
  
    isAllNumberinArray=(_msg)=>{
      if(this._input === undefined){
          this._inputErr.push(_msg);
          this.errors[this._key] = this._inputErr;
      }
      else if(!Array.isArray(this._input)){
          this._inputErr.push(_msg);
          this.errors[this._key] = this._inputErr;
      }
      else{
        let errs = [];
        let tf = true;
        this._input.map((x,i)=>{
          //console.log('x',(typeof x))
          if(typeof x !== 'number'){
            tf = false;
            errs.push({[i]:_msg});
          }
        });
        if(tf==false){
          //console.log('errs',errs);
          this._inputErr.push(errs);
          this.errors[this._key] = this._inputErr;
        }
      }
      return this;
  }
  
    isEmail= (_msg) => {
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };    
    
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        else if(!validateEmail(this._input)){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        return this;
    }
  
    isNumber=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        else if(isNaN(this._input)){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        return this;
    }
  
    isEmpty=(_msg)=>{
        if(this._input === undefined){
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        else if(this._input==""){  
            this._inputErr.push(_msg);
            this.errors[this._key] = this._inputErr;
        }
        return this;
    }
  
    customFunction=(_callback)=>{
        _callback(this);
        return this;
    }
  
    setError=(_msg)=>{
        this._inputErr.push(_msg);
        this.errors[this._key] = this._inputErr;
    }
  }
  
  
  module.exports  = Validator;