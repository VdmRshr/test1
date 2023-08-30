import React from 'react';
import {Comment} from "../types/CommentTypes";
import {Button} from "../ui";


export default function CommentItem({data, deleteComment}: { data: Comment, deleteComment:(id:string) => void }) {
    return (
        <div className='flex flex-col  items-center p-5 border mb-8 gap-4'>
            <div className='w-full flex items-center justify-between mb-5'>
                <div className="text-sm text-black italic">User: {data.user}</div>
                <div className="text-sm text-slate-500 italic">{data.date}</div>
            </div>
            <div className="text-lg text-black">{data.comment}</div>
            <hr className='w-full'/>
            <Button onClick={() => deleteComment(data.id)}>Delete Comment</Button>
        </div>
    );
}

