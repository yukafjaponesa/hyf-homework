import React, {useState, useEffect} from "react";

function User () {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredUser, setFilteredUser] = useState([]);

  useEffect(() => {
    setLoading(true);

    //https://jsonplaceholder.typicode.com/todos
    //`https://api.github.com/search/users?q=${query}`
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredUser(
      users.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search]) //[search, user] shows all the users from the beggining

  if(loading) {
    return <p>Loading...</p>
  }

  return(
    <div>
      <h1>Github user searcher</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />

      {filteredUser.map((user, idx) => {
        <UserDetails key={idex} {...user}/>
      })}
    </div>
  )

};

export default User
