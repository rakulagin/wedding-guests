import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import UsersList from "./Components/UsersList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <UsersList/>
      <Footer/>
    </div>
  );
}

export default App;
