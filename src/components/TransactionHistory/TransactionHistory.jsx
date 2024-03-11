import clsx from "clsx";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.thead}>Type</th>
          <th className={css.thead}>Amount</th>
          <th className={css.thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr
              className={clsx(css.tbodyTrWhite, {
                [css.tbodyTrGray]: index % 2,
              })}
              key={id}
            >
              <td className={css.tbodyTd}>{type}</td>
              <td className={css.tbodyTd}>{amount}</td>
              <td className={css.tbodyTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
