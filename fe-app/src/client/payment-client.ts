import { PaymentBody } from "@/types/payment.types";

export async function addNewPayment(newPayment: PaymentBody) {
  const response = await fetch("http://localhost:3001/api/exercise/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(newPayment),
  });

  if (!response.ok) {
    throw new Error("Error in fetching data");
  }

  const data = await response.json();

  return data;
}

export async function getPayments() {
  const response = await fetch("http://localhost:3001/api/exercise/payments");

  if (!response.ok) {
    throw new Error("Error in fetching data");
  }

  const data = await response.json();

  return data;
}
