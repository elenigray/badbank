function Spa() {

  const initialContext = {
    users:[
      // {
      //   name:'eleni', 
      //   email:'eleni.gray81@gmail.com', password:'tigerhop', balance:100,
      //   history: [
      //     {timestamp: new Date(), type: "deposit", amount: 100, "balance": 100}
      //   ]
      // }
    ],
    user: undefined
  }

  return (
    <>
    <h1><p className="text-center">Welcome to Gray's Bank</p></h1>
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={initialContext}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/home/" component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
    </>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
