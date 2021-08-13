import React from 'react';

export const Transaction = ({ transaction }) => {
  // Demonstrate the amount with a positive or negative sign in front
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className="minus">
      {transaction.text}{' '}
      <span>
        (// Use Math.abs() to avoid double negative signs by the amount)
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
