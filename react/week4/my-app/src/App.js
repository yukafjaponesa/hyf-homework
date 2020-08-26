import React, {useState, useEffect} from "react";
import './App.css';
import UserDetails from "./UserDetails"

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  //const [timer, setTimer] = useState(null) //#2
  //const [filteredUser, setFilteredUser] = useState([]);

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

//#2
//     const findUsers = () => {
//       clearTimeout(timer);
//       setTimer(null);
//       setTimer(
//         setTimeout(() => {
//           setLoading(true);
//           fetch(`https://api.github.com/search/users?q=${search}`)
//             .then((res) => res.json())
//             .then((res) => {
//               console.log(res);
//               setUsers(res.items);
//               setLoading(false);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         }, 1000)
//       );
//     };
//
//     findUsers();
//
// // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search]); // every time search changes, we call the fn
  //#2 end here




// #1
    // const findUsers = () => {
    //   clearTimeout(timer);
    //   setTimer(null);
    //   setTImer(
    //     setTimeout(() => {
    //       setLoading(true);
    //
    //       fetch(`https://api.github.com/search/users?q=${search}`)
    //         .then(res => res.json())
    //         .then(res => {
    //           console.log(res)
    //           setUsers(res.items);
    //           setLoading(false);
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     }, 1500)
    //   )
    // };
    // findUsers()
    //
    // }, [search]); // every time search changes, we call the fn

// #1

  // useEffect(() => {
  //   setFilteredUser(
  //     users.filter(user => {
  //       return user.name.toLowerCase().includes(search.toLowerCase())
  //     })
  //   )
  // }, [search]) //[search, user] shows all the users from the beggining


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
          <UserDetails key={name} {...user} />
        )}


     </div>
   )
   // #3 end here

//#2
  // if(loading) {
  //   return <p className="user-filter">Loading...</p>
  // }
  //
  // return(
  //   <div className="user-filter">
  //     <h1>Github user searcher</h1>
  //     <input
  //       type="text"
  //       placeholder="Search"
  //       onChange={e => setSearch(e.target.value)}
  //       value={search}
  //     />
  //
  //     {users.map((user, name) => (  // {}you have ti return inthis fn, () using this return directly
  //       <UserDetails
  //         key={name}
  //         {...user}
  //       />
  //     ))}
  //
  //   </div>
  // )
// #2 end here
};

export default App;

// `https://github.com/${search}`

// {filteredUser.map((user, idx) => {
//   <UserDetails key={idex} {...user}/>
// })}
