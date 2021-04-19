import { Provider } from "react-redux";
import store from "./reducer";
import CakeContainer from "./component/CakeContainer.js";
import HookIceCream from "./component/HookIceCreamContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookIceCream />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
