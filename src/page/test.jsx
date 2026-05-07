import React from "react";

export default function TestOrder() {
  const createOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@gmail.com",
          items: [{ name: "Pizza", qty: 1 }],
          amount: 8000,
        }),
      });

      const data = await res.json();
      console.log("Response from backend:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={createOrder}>
        Create Test Order
      </button>
    </div>
  );
}