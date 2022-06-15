const authHeader = () =>{
  const user = JSON.parse(localStorage.getItem('user'));

  if (user?.token) {
    return {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'auth-token': user.token
    }
  }
  return { 'Content-Type': 'application/json' }
}

export default authHeader;