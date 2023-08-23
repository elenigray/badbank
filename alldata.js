function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">All Data</h5>
        <p className="card-text">{JSON.stringify(ctx)}</p>
      </div>
    </div>
  );
}
