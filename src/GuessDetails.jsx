import React from "react";
import useQuery from "./useQuery";

export default function GuessDetails({ guestId, setGuestId }) {
  const { data: guest, error } = useQuery(`/guests/${guestId}`);
  if (error) {
    return <p>Error loading guests.</p>;
  }
  return (
    <article className="guest-details">
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
