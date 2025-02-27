
import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://jsonplaceholder.typicode.com/users', async () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      { id: 1, name: "John" },
      { id: 2, name: "Maverick" }
    ])
  }),
]