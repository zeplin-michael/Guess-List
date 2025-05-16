import React from "react";
import useQuery from "./useQuery";

export default function GuessList({ guests, setGuestId }) {
  const { data = [], error } = useQuery("/guests");
  if (error) {
    return <p>Error loading guests.</p>;
  }
  return (
    <>
      <h1>Guess List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
