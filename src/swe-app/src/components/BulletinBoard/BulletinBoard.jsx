import React from 'react';
import './BulletinBoard.css';
import { BulletinData } from '../../Data/Data';
import { UilUserCircle } from '@iconscout/react-unicons';

const BulletinBoard = () => {
    return (
        <div className="BulletinBoard" style={{overflowY: 'scroll', maxHeight: '400px'}}>
            {BulletinData.map((data) => {
                return (
                    <div className="Bulletin">
                        <UilUserCircle className="user-circle-icon"/>
                        <div className="noti">
                            <div style={{marginBottom: '0.5rem'}}>
                                <span>{data.name}:</span>
                                <span> {data.noti}</span>
                            </div>
                            <span>{data.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BulletinBoard;