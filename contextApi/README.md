# ContextAPI

 The Context API in React is a mechanism for sharing state between components in a more efficient and organized way. It allows you to pass data down the component tree without manually passing props through each level of the tree.

 1. Create a Context 
    In seprate file create a context using "createContext" also create "Provider" in same file.
 2. Wrap Components with a Provider
    As Provider, provides the shared data to it's children. Remember that "Provider" takes a "value" prop, which is the data that you want to share.
 3. Consuming the context
    Components that want to access the shared data can use the useContext hook.        

 This helps in avoiding the "prop drilling" problem, where you'd have to pass data through many levels of components. Instead, you create a central location for shared data that components can tap into when needed.


 ## How to Read & Learn contextApi project ?
  1. Read "Theme.js" inside *contexts folder* --> created context and Provider
  2. Then "App.jsx" --> wrapped components with Provider and consuming context.
  3. "ThemeBtn.jsx" and "Card.jsx"