function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  // Save the original function
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // No need for a value property, the <get> accessor works as the value with extra-work before we execute the function
    get() {
      // Lock the <this> usage to the Printer instance usage, not the event itself
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // Do not forget to return the edited function
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector("button")!;

// By default, when we're adding an event listener, <p.showMessage()> won't work
// Because <this> from the showMessage() method won't refers the Printer instance
// But the target of the event
// And so we need to bind the method to the expected this/context (from the decorator)

// Wrong, the <this> here still referenced the event, it will log "undefined"
// button.addEventListener("click", p.showMessage.bind(this));
button.addEventListener("click", p.showMessage);
