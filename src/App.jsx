import { useState } from "react";
import GuessList from "./GuessList";
import GuessDetails from "./GuessDetails";

export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <main>
      {guestId ? (
        <GuessDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuessList setGuestId={setGuestId} />
      )}
    </main>
  );
}
