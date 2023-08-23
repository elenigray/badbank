function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navigation Bar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/home/"
              id="home-link"
              data-toggle="tooltip"
              title="Home Page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/CreateAccount/"
              id="create-account-link"
              data-toggle="tooltip"
              title="Please have your email and password ready to Create Account."
            >
              Create Account
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/login/"
              id="login-link"
              data-toggle="tooltip"
              title="To View your Account, Please Login First"
            >
              Login
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/deposit/"
              id="deposit-link"
              data-toggle="tooltip"
              title="Deposit Funds Here"
            >
              Deposit
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/withdraw/"
              id="withdraw-link"
              data-toggle="tooltip"
              title="Withdraw Funds Here"
            >
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/balance/"
              id="balance-link"
              data-toggle="tooltip"
              title="View Recent Transactions"
            >
              Account Details
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#/alldata/"
              id="alldata-link"
              data-toggle="tooltip"
              title="All Data Page"
            >
              All Data
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
