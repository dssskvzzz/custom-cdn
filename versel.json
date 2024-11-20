{
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/styles.css",
      "dest": "/public/styles.css"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
