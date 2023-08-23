function Home(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      txtcolor="black"
      header= "GRAY'S BANK"
      title="Welcome to Gray's Bank"
      text="To get started please create an account or login using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />      );
}
