//Create a function that has one parameter:
//resolveAfter. Calling this function will
//return a promise that resolves
//after the resolveAfter seconds has passed.
//When you have written the promise,
//use it with async/await

const solveItAfterTime = (resolveAfter) => {
  return new Promise((resolve) => {
  setTimeout(() => {
    resolve('I am called asynchronously');
  }, resolveAfter*1000);
})
};

solveItAfterTime(2)
  .then((time) => {
    console.log(time)
  })
  .catch((error) => {
    console.log(error);
  });

const getTheTime = async () => {
  const time = await solveItAfterTime(2);
  console.log(time);
}
getTheTime();
