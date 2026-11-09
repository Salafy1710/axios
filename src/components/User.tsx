// import { useState, useEffect } from "react";
// import { requestUsers } from "../axios";

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   email: string;
// }

// function User() {
//   const [userList, setUserList] = useState<User[]>([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await requestUsers.get("/");
//         setUserList(response.data.users);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getUsers();
//   }, []);

//   return (
//   <div className="bg-white p-5 rounded-xl border border-gray-200">
//     <h1 className="text-xl font-bold text-gray-800 mb-4">
//       User List
//     </h1>

//     <div className="flex flex-col gap-2">
//       {userList.map((user) => (
//         <div
//           key={user.id}
//           className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-blue-50 transition"
//         >
//           <p className="font-semibold text-gray-800">
//             {user.firstName} {user.lastName}
//           </p>
//           <p className="text-sm text-gray-500">{user.email}</p>
//           <p className="text-xs text-gray-400 mt-1">
//             Age: {user.age}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// }

// export default User;