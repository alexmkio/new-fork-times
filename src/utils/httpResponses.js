const httpResponses = [
  {
    "code": 301,
    "message": "Moved Permanently",
    "description": "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
  },
  {
    "code": 401,
    "message": "Unauthorized",
    "description": `Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.`,
  },
  {
    "code": 403,
    "message": "Forbidden",
    "description": "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.",
  },
  {
    "code": 404,
    "message": "Not Found",
    "description": "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.",
  },
  {
    "code": 408,
    "message": "Request Timeout",
    "description": "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.",
  },
  {
    "code": 429,
    "message": "Too Many Requests",
    "description": `The user has sent too many requests in a given amount of time ("rate limiting").`,
  },
  {
    "code": 500,
    "message": "Internal Server Error",
    "description": "The server has encountered a situation it doesn't know how to handle.",
  },
  {
    "code": 502,
    "message": "Bad Gateway",
    "description": "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.",
  },
  {
    "code": 503,
    "message": "Service Unavailable",
    "description": "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.",
  },
  {
    "code": 504,
    "message": "Gateway Timeout",
    "description": "This error response is given when the server is acting as a gateway and cannot get a response in time.",
  }
]

export default httpResponses;