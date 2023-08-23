function Withdraw() {
  const [amount, setAmount] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const ctx = React.useContext(UserContext);

  function onChange(event) {
    setAmount(event.target.value);
  }

  function handleWithdrawal() {
    console.log('Handle withdrawal called.');
    const oldBalance = ctx.user.balance;

    if (isNaN(amount)) {
      alert('Please enter a valid number.');
      return;
    }

    const withdrawAmount = parseFloat(amount);

    if (withdrawAmount <= 0) {
      alert('Please enter a positive amount.');
      return;
    }

    if (withdrawAmount > oldBalance) {
      alert('Account balance is insufficient for withdrawal.');
      return;
    }

    const newBalance = oldBalance - withdrawAmount;
    console.log({ oldBalance, newBalance });
    ctx.user.balance = newBalance;
    ctx.user.history.push({
      timestamp: new Date(),
      type: 'withdrawal',
      amount: withdrawAmount,
      balance: newBalance,
    });

    setSuccessMessage(`Withdrawal of $${withdrawAmount} processed successfully.`);
    setAmount('');
  }

  return ctx.user ? (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Withdraw</h1>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <span className="card-text">
          Amount = {amount}, Balance = {ctx.user.balance}
        </span>
        <div className="form-group">
          <label htmlFor="number-input">Amount:</label>
          <input
            id="number-input"
            className="form-control"
            type="number"
            value={amount}
            onChange={onChange}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!amount}
          onClick={handleWithdrawal}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <h1>Please log in first</h1>
  );
}
