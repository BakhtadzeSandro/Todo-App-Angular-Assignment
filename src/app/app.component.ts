import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app-assignment';
  toDoContent = {'toDoContent': true};
  inProgress = {'toDoContent': true};
  done = {'toDoContent': true};
  todos: { name: string; level: string; }[] = [];
  todo: string = "";
  level: string = "";
  inProgressTodo: {name: string; level: string; }[] = [];
  doneTodo: {name: string; level: string; }[] = [];
  addTodo() {
    this.todos.push({ name: this.todo, level: this.level });
    this.todo = '';
    this.level = '';
  }
  deleteItem(index: number){
    this.todos = this.todos.filter((x, i) => index !== i)
  }
  moveToProgress(index: number){
    const movedTodo = this.todos.splice(index, 1)[0];
    this.inProgressTodo.push(movedTodo);
  }
  moveToTodo(index: number){
    const movedInProgressBack = this.inProgressTodo.splice(index, 1)[0];
    this.todos.push(movedInProgressBack);
  }
  moveToDone(index: number){
    const movedInProgressDone = this.inProgressTodo.splice(index, 1)[0];
    this.doneTodo.push(movedInProgressDone);
  }
  moveBackToProgress(index: number){
    const movedBackDone  = this.doneTodo.splice(index, 1)[0];
    this.inProgressTodo.push(movedBackDone);
  }
}
