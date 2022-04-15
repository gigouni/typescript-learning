// Property decorators take two properties:
//  - The target of the property (here the prototype of the instance (could be the constructor for static types))
//  - The name of the property
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// Accessor decorators take three properties:
//  - The target of the property (here the prototype of the object)
//  - The name of the method
//  - Accessor descriptor (here = { get: undefined, set: Function, configurable: true, enumerable: false })
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorators take three properties too:
//  - The target of the property (here the prototype of the object)
//  - The name of the method
//  - Method descriptor (here = { value: Function, writable: true, configurable: true, enumerable: false })
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorators take three properties too:
//  - The target of the property (here the prototype of the object)
//  - The name of the method (and not the parameter!)
//  - Position of the argument (here first = index 0)
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// The decorators are running just once
// It is not bound to the number of instances
// It allows to perform additional behind-the-scenes setup work when a class is defined
const p1 = new Product('Book', 19)
const p2 = new Product('Other book', 29)
