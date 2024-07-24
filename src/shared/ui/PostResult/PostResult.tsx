import React from "react";
import { Posts } from "shared/types/type";
import {
  ResultBody,
  ResultButton,
  ResultContainer,
  ResultTitle,
} from "./styles";

type Props = {
  json: Posts;
  remove: (id: number) => void;
};

const PostResult: React.FC<Props> = ({ json, remove }) => {
  return (
    <ResultContainer>
      <ResultTitle>{json.title}</ResultTitle>
      <ResultBody>{json.body}</ResultBody>
      <ResultButton onClick={() => remove(json.id)}>Delete</ResultButton>
    </ResultContainer>
  );
};

export default PostResult;
