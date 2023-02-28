"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { db } from "../firebase";

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();
  // https://firebase.google.com/docs/firestore/manage-data/add-data?hl=zh-tw#add_a_document
  const createNewChat = async () => {
    // nosql 的數據模型大概會長這樣
    // https://firebase.google.com/docs/firestore/data-model#subcollections
    /**
      collection
        document: {data}
          subcollection
            document: {data}
            document: {data}
        document: {data}
    */
    // 添加文檔：addDoc(collection(路徑), data)
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
