import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task, id) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={id} />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>Todo Mate</h1>
      <form action="">
        <h2 className="label-wrapper">
          <label htmlFor="newTodoInput" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="newTodoInput"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span>All</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Completed</span>
          <span className="visually-hidden">Tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {/* <Todo name="Eat" id="todo-0" completed/>
        <Todo name="Sleep" id="todo-1"/>
        <Todo name="Repeat" id="todo-2"/> */}

        {taskList}
      </ul>
    </div>
  );
}

export default App;
