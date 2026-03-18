import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div>
      <Counter />
      <UserProfile />

      <Todo />

      <Form />
    </div>
  );
};

export default App;
