import Todos from './components/Todos';

import { Todo } from './types';

function App() {
  // test data only
  const todoList: Todo[] = [
    {
      id: 'todo-1',
      text: 'buy groceries'
    },
    {
      id: 'todo-2',
      text: 'clean my room'
    }
  ];

  return (
    <div>
      <Todos todos={todoList} />
    </div>
  );
}

export default App;
