import React, {useState} from 'react';
import {Button, Textarea} from "../ui";


export default function NewComment({onCancel, onAddComment}:{onCancel:(value:boolean)=>void, onAddComment:(comment:string)=>void}) {
    const [comment, setComment] = useState('')
    console.log(comment)
    return (
        <div className='flex flex-col  items-center gap-4'>
            <h3>Add New Comment</h3>
            <Textarea value={comment} onChange={e=>setComment(e.target.value)}/>
            <hr className='w-full'/>
            <div className="flex gap-4">
                <Button onClick={()=> onCancel(false)}>Cancel</Button>
                <Button onClick={()=> onAddComment(comment)}>Add</Button>
            </div>
        </div>
    );
}

