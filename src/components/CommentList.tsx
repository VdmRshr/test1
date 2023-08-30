import React from 'react';
import {Comment} from "../types/CommentTypes";
import CommentItem from "./CommentItem";

export default function CommentList({data, deleteComment}: { data: Comment[], deleteComment:(id:string)=>void }) {
    return (
        <div className=''>
            {data.map(comment=>{
                return <CommentItem data={comment} deleteComment={deleteComment}/>
            })}

        </div>
    );
}

