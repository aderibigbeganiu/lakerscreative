// show a notification after 15 seconds (the notification
// permission must be granted first)
setTimeout(() => {
  self.registration.showNotification("Hello, world!")
}, 15000)
<<<<<<< HEAD
=======
window.Notification.requestPermission()

>>>>>>> 1e4894f7d5103c57887845bff74a67ad75694c39
// register a custom navigation route
const customRoute = new workbox.routing.NavigationRoute(({ event }) => {
  // ...
})
workbox.routing.registerRoute(customRoute)
