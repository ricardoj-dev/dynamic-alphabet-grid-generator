import { useFullStackChallengeStore } from "@/store";
import { addNewPayment, getPayments } from "@/client/payment-client";
import { PaymentBody } from "@/types/payment.types";
import { ChangeEvent, useState } from "react";

const Form = () => {
  const [payment, setPayment] = useState<string>("");
  const [ammount, setAmmount] = useState<number>(0);

  const updatePayments = useFullStackChallengeStore(
    (state) => state.updatePayments
  );

  const handleChangePayment = (event: ChangeEvent<HTMLInputElement>) => {
    setPayment(event.target.value);
  };

  const handleChangeAmmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmmount(Number(event.target.value));
  };

  const handleClick = async () => {
    try {
      const newPayment: PaymentBody = {
        name: payment,
        ammount: ammount,
      };

      const result = await addNewPayment(newPayment);

      if (result.status === "added") {
        const data = await getPayments();
        updatePayments(data.payments);
      }
    } catch (error) {
      console.error("Error in adding a payment:", error);
    }
  };

  return (
    <div className="flex items-end gap-8">
      <div className="flex flex-col ">
        <p className="text-blue-950 text-sm uppercase">Payment</p>
        <input
          className="mt-2 p-2 border-2 border-blue-950 rounded-lg"
          placeholder="Character"
          onChange={handleChangePayment}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-blue-950 text-sm uppercase">Ammount</p>
        <input
          className="mt-2 p-2 border-2 border-blue-950 rounded-lg"
          placeholder="Ammount"
          type="number"
          onChange={handleChangeAmmount}
        />
      </div>
      <button
        onClick={handleClick}
        className="uppercase text-center align-middle bg-blue-950 text-white p-2 h-12 rounded"
      >
        + Add
      </button>
    </div>
  );
};

export default Form;
