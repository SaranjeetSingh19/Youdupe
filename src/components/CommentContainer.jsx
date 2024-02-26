import React from "react";
import Comment, { CommentList } from "./Comment";

const commentData = [
  {
    name: "@Aku",
    comment: "Hahahaha ye bhi koi video hai bekarr ",
    replies: [],
  },
  {
    name: "@Bruno",
    comment: "Video to theek hai pr smjh ni aai",
    replies: [
      {
        name: "@Keenu",
        comment: "Mere ko smjh aai hai, hehe",
      },
      {
        name: "@Cheenu",
        comment: "Mere ko bhi aa gai, haha",
        replies: [
            {
                name: "@Pola",
                comment: "Mere ko bhi smjhao"
            }
        ]
      },
    ],
  },
  {
    name: "@Buntaa",
    comment: "Mera naam hai buntaaa..",
    replies: [],
  },
  {
    name: "@Richie",
    comment: "Paisa to bhut hae jnaaab",
    replies: [],
  },
  {
    name: "@Doraemon",
    comment: "Gadget apun ka kidhr udda daala ab?",
    replies: [
      {
        name: "@Nobi",
        comment: "Hehe mere ko ni ptaaaa, lol",
      },
      {
        name: "@Gian",
        comment: "Mai hu gian, aap hai gian, hum sb hai Gian",
        replies: [
            {
                name: "@Suneo",
                comment: "Kya baat h"
            }
        ]
      },
    ],
  },
  {
    name: "@Pikachu",
    comment: "Pi Pikaaa chu Pikachuuuuu..",
    replies: [],
  },
];

const CommentContainer = () => {
  return (
    <div>
        <CommentList comments={commentData}/>
      {/* <Comment info={commentData[0]} /> */}
    </div>
  );
};

export default CommentContainer;
