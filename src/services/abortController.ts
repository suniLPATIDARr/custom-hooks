// The AbortController is a built-in JavaScript API used to abort
// asynchronous operations, particularly fetch requests.
// It gives you a way to cancel ongoing actions
// if they are no longer needed—saving resources and improving performance.
// AbortController.signal: Returns an AbortSignal object used to communicate with the request.

// AbortSignal.aborted: A boolean indicating whether the request has been aborted.

// AbortSignal.onabort: A handler function called when the signal is aborted.

// You can listen to the abort event:
// signal.addEventListener('abort', () => {
//   console.log('The request was aborted');
// });
const controller = new AbortController();

fetch('https://api.example.com/data', {
  signal: controller.signal
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', error);
    }
  });

// Abort after 3 seconds
setTimeout(() => {
  controller.abort();
}, 3000);

// useEffect(() => {
//   const controller = new AbortController();

//   fetch('/api/data', { signal: controller.signal })
//     .then(res => res.json())
//     .then(setData)
//     .catch(err => {
//       if (err.name !== 'AbortError') console.error(err);
//     });

//   return () => controller.abort(); // Cleanup on unmount
// }, []);
