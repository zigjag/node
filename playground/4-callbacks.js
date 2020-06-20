const doWorkCallback = (callback) => {
  setTimeout(() => {
      callback(undefined, [1, 2, 3, 4])
  }, 2000)
}

doWorkCallback((err, result) => {
  if(err) return console.log(err);
  console.log(result);
});
