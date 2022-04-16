function Logger(logString: string) {
  console.log('LOG 1 -- LOGGER FACTORY');
  return function(constructor: Function) {
    console.log('LOG 4 -- ' + logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('LOG 2 -- TEMPLATE FACTORY');
  return function(constructor: any) {
    console.log('LOG 3 -- Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// The FACTORY decorators are running up-first!
// Then, it follows the JavaScript logic and the decorators FUNCTIONS are running bottom-first!
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
