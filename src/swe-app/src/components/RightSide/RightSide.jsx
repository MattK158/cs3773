import React from 'react';
import './RightSide.css';
import BulletinBoard from '../BulletinBoard/BulletinBoard';
import CustomerReview from '../CustomerReview/CustomerReview';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Bulletin Board</h3>
                <BulletinBoard />
                <div>
                    <h3>Customer Review</h3>
                    <CustomerReview />
                </div>
            </div>
        </div>
    )
}

export default RightSide;