import logo from "./logo.svg";
import "./App.css";
import BookingCard from "./Components/BookingCard/BookingCard";

function App() {
  return (
    <div>
      <BookingCard
        name={"Hotel Theater Garni"}
        avarageRate={"7,6"}
        distance={4.4}
        town="Belgrade"
        place="Zemun"
        comment="dobar"
        num={57}
        source="https://cf.bstatic.com/xdata/images/hotel/square600/71426844.webp?k=fe5ffd67b7cbb2caeb054ec5c135bd81a0f7b038ec545874f1b007db9b1f2cc9&o=&s=1"
      />
      <BookingCard
        name={"Sky Hotel"}
        avarageRate={"8,9"}
        distance={0.6}
        town="Belgrade"
        place="Savski Venca"
        comment="Sjajan"
        num={1593}
        source="https://cf.bstatic.com/xdata/images/hotel/square600/178827561.webp?k=3437325690b0d357b2ab5dda27a95bade76e868175af23280b9e3f3998533ad8&o=&s=1"
      />
      <BookingCard
        name={"Hotel Elegance"}
        avarageRate={"8,6"}
        distance={5.3}
        town="Belgrade"
        place="Palilu"
        comment="Sjajan"
        num={1276}
        source="https://cf.bstatic.com/xdata/images/hotel/square600/274699724.webp?k=1b9f6aeea68ad57bc06b1e705ef975008b64afa388c763db9321714c1f3665fb&o=&s=1"
      />
      <BookingCard
        name={"Hotel Vrbak"}
        avarageRate={"10"}
        distance={0.1}
        town="Novi Pazar"
        comment="Sjajan"
        num={1276}
        place="Novi Pazar"
        source="https://cf.bstatic.com/xdata/images/hotel/max1024x768/274704589.jpg?k=03d079b0e4b53ea5d50d1c120d76653de3f19df0f07d17ab58f6764e5809d6ad&o=&hp=1"
      />
    </div>
  );
}

export default App;
