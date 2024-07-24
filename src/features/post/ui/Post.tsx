import React, { FormEvent, useState } from "react";
import {
  PostContainer,
  PostFirst,
  PostTitle,
  PostLast,
  PostBody,
  PostBtn,
} from "./style";
import { RootState, useAppDispatch, useAppSelector } from "app/store";
import PostResult from "shared/ui/PostResult/PostResult";
import { deleteAsyncPost, postsAsync } from "../store/actions";
import { Posts } from "shared/types/type";

const Post: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector(
    (state: RootState) => state.posts
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Titile is required");
    } else if (body.trim() === "") {
      alert("Body is required");
    } else if (title.length < 5) {
      alert("Title must be at least 5 characters long");
    } else if (body.length < 10) {
      alert("Body must be at least 10 characters long");
    } else {
      dispatch(postsAsync({ title, body }));
    }
    setTitle("");
    setBody("");
  };

  const HandleDelete = (id: number) => {
    dispatch(deleteAsyncPost(id));
  };

  return (
    <PostContainer>
      <PostFirst onSubmit={handleSubmit}>
        <PostTitle value={title} onChange={(e) => setTitle(e.target.value)} />
        <PostBody value={body} onChange={(e) => setBody(e.target.value)} />
        <PostBtn type="submit">Add text</PostBtn>
      </PostFirst>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <PostLast>
        {posts.map((el) => (
          <PostResult key={el.id} json={el} remove={HandleDelete} />
        ))}
      </PostLast>
    </PostContainer>
  );
};

export default Post;
