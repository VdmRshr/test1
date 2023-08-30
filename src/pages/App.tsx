import React, {useEffect, useState} from 'react';
import CommentList from "../components/CommentList";
import {Button, Dialog} from "../ui";
import {Comment} from "../types/CommentTypes";
import {addComment, deleteComment, getComments} from "../services/commentsAPI";
import NewComment from "../components/NewComment";
import {getDate} from "../helpers/getDate";


function App() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [comments, setComments] = useState<Comment[]>([]);

    const fetchComments = () => {
        getComments().then((result: { data: React.SetStateAction<Comment[]>; }) => setComments(result.data));
    };
    const onDeleteHandle = (id: string) => {
        deleteComment(id).then((res) => {
            fetchComments();
        });
    };
    const onAddComment = (comment: string) => {
        if (comment){
        addComment({
            id: 'id' + new Date().getUTCMilliseconds(),
            user: "Unknown user",
            comment,
            date: getDate()
        }).then(() => {
            setShowModal(false);
            fetchComments();
        })}
    }
    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div>
            <header className="text-2xl text-black flex justify-center p-5 mb-5 bg-orange-200">
                Comments:
            </header>
            <main className='flex justify-center flex-col p-10 items-center'>
                <div className="w-full flex justify-end p-3">
                    <Button onClick={() => setShowModal(true)}>Add Comment</Button>
                </div>
                <div className='w-1/3'>
                    <CommentList data={comments} deleteComment={onDeleteHandle}/>
                </div>
            </main>
                <Dialog onClose={setShowModal} open={showModal}>
                    <NewComment onCancel={setShowModal} onAddComment={onAddComment}/>
                </Dialog>

        </div>
    );
}

export default App;
