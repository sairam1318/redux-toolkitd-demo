import { useDispatch, useSelector } from "react-redux";
import { addMobile, fetchMobiles } from "./slice/mobileSlice";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.mobile);
  console.log(store, "store");
  return (
    <div className="App">
      {store.mobiles.map((mobile, index) => {
        return (
          <div key={index}>
            <h1>Mobile Name is: {mobile.name} </h1>
            <h2>Mobile price is: {mobile.price} </h2>
          </div>
        );
      })}
      <br />
      <button
        onClick={() => {
          dispatch(fetchMobiles());
        }}
      >
        Add mobile
      </button>
    </div>
  );
}
