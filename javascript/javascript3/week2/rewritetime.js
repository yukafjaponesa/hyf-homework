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



const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        }
        else {
            reject('error')
        }
    })
}

getCurrentLocation()
  .then(position => console.log('right position'))
  .catch(e => console.log('position not available'))
