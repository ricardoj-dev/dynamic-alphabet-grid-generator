import { getPayments } from "@/client/payment-client";
import { useFullStackChallengeStore } from "@/store";
import { Payment } from "@/types/payment.types";
import { useEffect } from "react";

const Table = () => {
  const payments = useFullStackChallengeStore((state) => state.payments);
  const updatePayments = useFullStackChallengeStore(
    (state) => state.updatePayments
  );

  useEffect(() => {
    const doTheFetch = async () => {
      const data = await getPayments();
      updatePayments(data.payments);
    };

    doTheFetch();
  }, []);

  return (
    <table className="table-auto">
      <thead className="h-14">
        <tr className="border-2">
          <th className="font-bold text-blue-950 uppercase text-left">Name</th>
          <th className="font-bold text-blue-950 uppercase text-center">
            Ammount
          </th>
          <th className="font-bold text-blue-950 uppercase text-center">
            Code
          </th>
          <th className="font-bold text-blue-950 uppercase text-center">
            Grid
          </th>
        </tr>
      </thead>
      <tbody>
        {payments &&
          payments.map((payment: Payment) => (
            <tr key={payment.id} className="border-2 h-10">
              <td className="text-left">{payment.name}</td>
              <td className="text-center">{payment.ammount}</td>
              <td className="text-center">{payment.code}</td>
              <td className="text-center">{payment.grid.length}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
