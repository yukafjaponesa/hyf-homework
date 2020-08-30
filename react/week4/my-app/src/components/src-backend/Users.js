import React, {useState, useEffect} from "react";
import './App.css';
import UserDetails from "./UserDetails";
// import {DebounceInput} from 'react-debounce-input';
import {debounce} from "lodash";

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if(!search) {
      return;
    }

// #3 start
    const abortController = new AbortController()

    fetch(`https://api.github.com/search/users?q=${search}`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if(res.items) {
          setUsers(res.items)
          setLoading(false)
        }

      })
      .catch((err) => {
        console.log(err)
      })

    // Abort previously created Fetch request
    // if search param has been changed in order
    // not to overload server with redundant requests
    return () => {
      abortController.abort()
    }
  }, [search]) // every time search changes, we call the fn
  // #3 end here

// #3 start
  return (
     <div>
       <h1>Github user searcher</h1>
       <input
         type="text"
         placeholder="Search"
         onChange={(e) => setSearch(e.target.value)}
         value={search}
       />

       {loading && <p>Loading...</p> }

       {!loading &&
         users.map((user, name) => // {}you have ti return inthis fn, () using this return directly
          <UserDetails
              key={name}
              {...user}
          />
        )}


     </div>
   )
   // #3 end here

};

export default Users
