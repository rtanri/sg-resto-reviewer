if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log('registration is working!');
  })
  .catch(function(){
    console.log('Registration failed');
  });
}