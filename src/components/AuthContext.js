// import React, { createContext, useContext, useState } from 'react';

// // Create the AuthContext
// const AuthContext = createContext();

// // Create a provider component to wrap your app
// export function AuthProvider({ children }) {
//   const [userId, setUserId] = useState(null);

//   // You can add functions to set the userId or perform authentication here

//   return (
//     <AuthContext.Provider value={{ userId, setUserId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Create a custom hook to use the context
// export function useAuth() {
//   return useContext(AuthContext);
// }
