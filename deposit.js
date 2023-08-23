function Deposit() {
  const [amount, setAmount] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function onChange(event) {
    setAmount(+event.target.value);
  }

  function handleDeposit() {
    console.log('Handle deposit called.');
    const oldBalance = ctx.user.balance;
    const newBalance = oldBalance + amount;
    console.log({ oldBalance, newBalance });
    ctx.user.balance = newBalance;
    ctx.user.history.push({
      timestamp: new Date(),
      type: 'deposit',
      amount,
      balance: newBalance,
    });
    setAmount(0);
  }

  return ctx.user ? (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Deposit</h5>
        <span className="card-text">
          Amount: {amount}, Balance: {ctx.user.balance}
        </span>
        <div className="form-group">
          <label htmlFor="number-input">Amount:</label>
          <input
            id="number-input"
            className="form-control"
            type="number"
            value={amount ? amount : ''}
            onChange={onChange}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={amount <= 0}
          onClick={handleDeposit}
        >
          Submit
        </button>
      </div>
    </div>
  ) : (
    <h1>Please log in first</h1>
  );
}