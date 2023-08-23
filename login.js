function Login(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);
  ctx.user = undefined

  function handleLogin() {
    console.log('ctx.users', {users: ctx.users})
    for(const user of ctx.users) {
      console.log('user', {user})
      if (user.email == email && user.password == password) {
        // yay match do something
        ctx.user = user;
        console.log(`found user ${email}`);
        props.history.push('/')
        return;
      }
    }
    setStatus('Invalid username or password')
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={(  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            )}
    />
  )
}
