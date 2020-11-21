const React = require("react")

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

exports.onClientEntry = () => {
  console.log("We've started!")
  callAnalyticsAPI()
}
