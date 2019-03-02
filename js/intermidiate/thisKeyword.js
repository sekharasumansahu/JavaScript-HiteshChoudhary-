let MyClass = {
  name : 'Sekhar',
  id : 18261,
  email : 'sekharsahu143@gmail.com',
  dept : 'ServiceNow',

  getDept : function () {
    return `Dept is ${this.dept}`
  }

}

console.log(MyClass.getDept());
