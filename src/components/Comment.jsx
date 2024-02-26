import {
  faThumbsDown,
  faThumbsUp,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Comment = ({ info }) => {
  console.log(info);

  const { name, comment } = info;

  return (
    <div className="flex mb-4">
      <div className="rounded-full w-10 pt-0.5 h-10 text-center bg-zinc-800">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="bg-transparent text-white text-3xl rounded-full "
        />
      </div>
      <div className="font-semibold ml-4">
        <h1 className="mb-0.5">{name}</h1>
        <h1>{comment}</h1>
        <div className="mt-1 cursor-pointer inline-block">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-lg bg-transparent hover:scale-110 transition ease-out duration-150 hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="text-lg bg-transparent ml-7 hover:scale-110 transition ease-out duration-150 hover:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return (comments && comments.map((comment) => (
    <div>
      <Comment info={comment} />
      <div className="ml-10 border-l-2 border-slate-700">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  )))
};

export default Comment;
