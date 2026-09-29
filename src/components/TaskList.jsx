import { Component } from "react";

// tasks = [
//       { id: 1, text: "Вивчити React" },
//       { id: 2, text: "Розібратися з класовими компонентами" },
//       { id: 3, text: "Зробити домашнє завдання" },
//       { id: 4, text: "Здати домашнє завдання" },
//     ]

//     inputRef = React.createRef
// handleDelete = (id) => {
//     this.tasks = this.tasks.filter((tasks) => tasks.id !== id)
//     this.forceUpdate()
// }

// class TaskList extends Component {
//   render() {
//     return (
//         <div>
//              <h2>Список завдань на сьогодні</h2>
//              <ul>
//                 {this.tasks.map((task) =>(
//                     <li key={task.id}>
//                         {task.text}{""}
//                         <button onClick={() => this.handleDElete(task.id)}>
//                             Видалити
//                         </button>
//                     </li>
//                 ))}
//              </ul>
//         </div>
       
//     );
//   }
// }


// export default TaskList


class TaskList extends Component {

  tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Розібратися з класовими компонентами" },
    { id: 3, text: "Зробити домашнє завдання" },
    { id: 4, text: "Здати домашнє завдання" },
  ];


  handleDelete = (id) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.forceUpdate(); 
  };

  render() {
    return (
      <div>
        <h2>Список завдань на сьогодні</h2>
        <ul>
          {this.tasks.map((task) => (
            <li key={task.id}>
              {task.text}{" "}
              <button onClick={() => this.handleDelete(task.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;