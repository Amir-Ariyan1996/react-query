Serialization in React Query:

Imagine you have a library of books you fetch from a remote server to display on a website. Each time you ask for a book by its title (query key), React Query remembers (serializes) this request and the book details (the data).
If you ask for the same book again, React Query quickly gives you the book from its memory (cache), avoiding another trip to the remote server.


use client react query:

Next JS 14 doesn't allow provider and context to be directly used within a server render component as the server-rendered components are just HTML streamed as a response. 
