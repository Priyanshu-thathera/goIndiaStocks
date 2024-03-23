import { BiSolidUserCircle } from "react-icons/bi";
import React from 'react'

// creating typescript interfaces for props to address typescript warning
interface UserCardProps {
  user:string
  description:string
  like:number
  view:number
  comments:number
}

const UserCard :React.FC<UserCardProps>= ({user, description, like,view, comments}) => {
  return (
      <div className="flex flex-row shadow rounded border-r-4 border-b-3 mb-4 sm:text-sm text-xs">
        
        <div className="logo m-2 sm:text-5xl text-2xl">
          <BiSolidUserCircle />
        </div>

        <div className="content flex flex-col my-2 w-5/6">
          <div className="flex gap-4 mb-2">
            <span>{user} </span>
            <div className="bg-sky-600 px-3 rounded-full">sector</div>
          </div>

          <p>
          {description}
          </p>

          <div className="flex flex-row justify-between">
            <span>
              <i className="ri-heart-line"></i> {like}k
            </span>
            <span>
              <i className="ri-eye-line"></i> {view}k
            </span>
            <span>
              <i className="ri-chat-4-line"></i> {comments}k comments
            </span>
            <span>
              <i className="ri-share-line"></i> Share
            </span>
          </div>
        </div>

        <div className="text-sky-700 whitespace-nowrap py-2 px-1">
          <span>2 min ago</span>
        </div>
      </div>
  );
};

export default UserCard;




