// import Card from "./components/Card";
import Cards from "./components/Cards";
import UserForm from "./components/UserForm";
// import UserManagement from "./services/user-management";

function App() {
  return (
    <div className='App'>
      <div className="cards border border-dark border-1">


      <Cards />
      </div>

      <div className="user-form border-dark border-1">

      <UserForm />

      </div>
    </div>
  );
}

export default App;
