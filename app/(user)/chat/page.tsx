
import React from 'react'
import ChatList from '../../../components/ChatList'
type props = {
  params: {};
  searchParams: {
    error: string;
  };
};


function page({ searchParams: { error } }: props) {


  return (
    <div>
     <ChatList/> 
    </div>
  )
}

export default page
