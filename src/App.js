import { Provider } from "react-redux";
import store from "./reducer";
import CakeContainer from "./component/CakeContainer.js";
import HookIceCream from "./component/HookIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookIceCream />
      </div>
    </Provider>
  );
}

export default App;
