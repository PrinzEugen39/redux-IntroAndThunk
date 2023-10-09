import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <>
      {customer === "" ? (
        <h2>Create a Customer first</h2>
      ) : (
        <h2>👋 Welcome, {customer}</h2>
      )}
    </>
  );
}

export default Customer;
