import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos/1`;

//Create Interface to make sicher code has gleich properti 
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The Todo with Id: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}`);
};