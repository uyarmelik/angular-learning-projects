export class Model {
  user: string;
  items: TodoItem[];

  constructor() {
    this.user = 'Melik';
    this.items = [
      new TodoItem('Finish Angular Project', false),
      new TodoItem('Plan Weekly Schedule', false),
      new TodoItem('Update Resume', false),
      new TodoItem('Learn New Technology', false),
      new TodoItem('Grocery Shopping', false),
      new TodoItem('Exercise Routine', false),
      new TodoItem('Read a Book', false),
      new TodoItem('Plan a Weekend Activity', false),
      new TodoItem('Review Finances', false),
    ];
  }
}

export class TodoItem {
  description;
  action;
  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
