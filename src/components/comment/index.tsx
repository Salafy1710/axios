import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

function Comment() {
  const [comments, setComments] = useState<Comment[]>([]);
  

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments?limit=3");
        const data = await response.json();

        setComments(data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    getAllComments();
  }, []);

  return (
    <>
      <CommentForm />
      <CommentList comments={comments} />
    </>
  );
}

export default Comment;