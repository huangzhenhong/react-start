import React from 'react';
import faker from 'faker';
import CommentDetail from './comment-detail';
import ApprovalCard from './approval-card';

const CommentList = () => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <CommentDetail 
                    timeAgo="Today at 5:42PM" 
                    author="Matt" 
                    content="How artistic!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <form className="ui reply form">
                <div className="field">
                <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div>
    );
};

export default CommentList;