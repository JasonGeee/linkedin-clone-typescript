import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Post from "./Post";
import { db } from "./firebase";
import {
  addDoc,
  getDocs,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { useAppSelector } from "./app/hooks";
import { selectUser } from "./features/userSlice";

function Feed() {
  const user = useAppSelector(selectUser);
  const [input, setInput] = useState<string>("");
  const [posts, setPosts] = useState<any[]>([]);

  // Gets post collection from Firestore Database
  const postsCollectionRef = collection(db, "posts");

  // Firebase Query
  const q = query(postsCollectionRef, orderBy("timestamp", "desc"));

  // Creates a database, based on data added into collection
  useEffect(() => {
    // Snapshot allows for realtime collection data
    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(posts);
    });
  }, []);

  // Add Post from Button into firestore
  const sendPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Add to collections firestore using addDoc
    addDoc(postsCollectionRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="flex-[0.6] my-2 mx-5">
      <div className="bg-white p-2.5 pb-5 rounded-xl mb-5">
        {/* Input Field, top of Feed Section */}
        <div className="flex rounded-[30px] p-2.5 pl-4 text-gray-500 border border-solid border-gray-300">
          <CreateIcon />
          <form className="flex w-full" action="">
            <input
              className="border-none flex-[1] ml-2.5 outline-0 font-semibold"
              type="text"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
            <button className="hidden" type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        {/* Feed Options */}
        <div className="flex justify-evenly">
          <InputOption Icon={ImageIcon} title="Photo" color="text-blue-400" />
          <InputOption
            Icon={SmartDisplayIcon}
            title="Video"
            color="text-yellow-400"
          />
          <InputOption Icon={EventIcon} title="Event" color="text-stone-400" />
          <InputOption
            Icon={NewspaperIcon}
            title="Write Article"
            color="text-green-700"
          />
        </div>
      </div>

      {/* Posts */}
      {/* {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        );
      })} */}
      {posts.map(({ id, name, description, message, photoUrl }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        );
      })}
    </div>
  );
}

export default Feed;
