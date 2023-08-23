function Balance() {
  const ctx = React.useContext(UserContext);
  const user = ctx.user;
  const transHistory = ctx.user?.history;

  return (user)?(
    <>
      <h1>Account Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transHistory.slice(0).reverse().map((elem, indx) => {
            return (
              <tr key={indx}>
                <td>{elem.timestamp.toString()}</td>
                <td>{elem.type}</td>
                <td>{elem.amount}</td>
                <td>{elem.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ): (
    <h1>Please Login First</h1>
  )
}
