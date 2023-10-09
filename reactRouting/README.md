# Routing in React

In React, routing is the process of navigating between different components or pages in a single-page application (SPA).
   As routing in not a part of React's core functionality.
So, for handling routing in React's Application, developer often use third-party libraries.React Router is a popular library that helps manage the routing in React applications.

1. In this mini-Project I have tried to impliment Concept of Routing using one of the most popular library "React Router".
2. To use React Router, I have installed it as a dependency in this project. *Here's how I installed React Router with npm:* **npm install react-router-dom**
3. Layout (means *structure of page*) was created
     `<Header/><Outlet/><Footer/>`
where Header and Footer components are consistent across multiple pages and "Outlet" is a component of react-router-dom which is used as a placeholder where the content of different pages(Children Component) are rendered.
   Header includes Navigation links and Logo while Footer contains information like copyright notices, links to term and services, etc.
4. created different components like Home, About, Team & Partners and Contact.