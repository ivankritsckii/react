export class Store {
    private state: { [key: string]: any };
  
    constructor() {
      this.state = {};
    }
  
    get value() {
      return this.state;
    }
  
    dispatch() {}
  
    subscribe() {}
  }

const store = new Store();

store.dispatch({
    type: 'ADD_TODO',
    payload: { label: 'Eat pizza', complete: false },
  });