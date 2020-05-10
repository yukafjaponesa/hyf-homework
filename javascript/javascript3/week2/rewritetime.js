// setTimeoutPromise(3000)
//     .then(() => {
//         console.log('Called after 3 seconds');
//     });

const setTimeoutPromise = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Called after ${time} seconds`)
    }, time * 1000)
})
}
setTimeoutPromise(2)
  .then(timeout => console.log(timeout))
  .catch(e => console.log('error'))


// getCurrentLocation()
//     .then((position) => {
//         // called when the users position is found
//         console.log(position);
//     })
//     .catch((error) => {
//         // called if there was an error getting the users location
//         console.log(error);
//     });

const getCurrentLocation = (location) => {
    return new Promise((resolve, reject) => {
      if(location) {
        resolve(location)
      }else {
        reject(error);
      }
    })
}

getCurrentLocation(true)
  .then(position => console.log('right position'))
  .catch(e => console.log('position not available'))
