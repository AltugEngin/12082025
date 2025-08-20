import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import MyModal from "./Dialog";
import PostList from "./PostList";

const createPost = async (post) => {
  const { data, error } = await supabase.from("posts").insert({ ...post });
  if (error) throw new Error(error.message);
  return data;
};

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [supplier,setSupplier]=useState("")
  const [dialog, setDialog] = useState(false);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data) => {
      return createPost(data.post);
    },
    onSuccess: () => setDialog(true),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ post: { title,supplier } });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <input
          required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter equipment"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          ></input>
          <input
          required
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            placeholder="Enter supplier"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          ></input>
          <button
            type="submit"
            className="flex w-full mt-5 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            {isPending ? "Creating..." : "Insert"}
          </button>
        </form>
        <MyModal value={dialog} setValue={setDialog}></MyModal>
        
      </div>
      
    </div>
  );
}
