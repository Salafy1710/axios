// interface Comment {
//   id: number;
//   body: string;
//   postId: number;
//   likes: number;
//   user: {
//     id: number;
//     username: string;
//     fullName: string;
//   };
// }

// interface CommentListProps {
//   comments: Comment[];
// }

// function CommentList({ comments }: CommentListProps) {
//   return (
//     <section className="w-full mt-6">
//       <h2 className="font-semibold text-gray-800 mb-3">
//         Daftar Komentar
//       </h2>

//       <main className="flex flex-col gap-3">
//         {comments.map((comment) => {
//           return (
//             <div
//               key={comment.id}
//               className="border border-gray-200 p-3 rounded-lg"
//             >
//               <p className="italic text-sm text-gray-700">
//                 "{comment.body}"
//               </p>

//               <div className="border-t mt-3 pt-2 flex justify-between text-xs text-gray-500">
//                 <p>Comment by: {comment.user.username}</p>
//                 <p>👍{comment.likes}</p>
//               </div>
//             </div>
//           );
//         })}
//       </main>
//     </section>
//   );
// }

// export default CommentList;
