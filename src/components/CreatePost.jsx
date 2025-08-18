import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

const createPost=async(post)=>{

    const {data,error}=await supabase.from("posts").insert({...post})
    if(error) throw new Error(error.message)
    return data
}

export default function CreatePost() {
const [title,setTitle]=useState("")

const {mutate,isPending,isError}=useMutation({
    mutationFn:(data)=>{
        return createPost(data.post)
    }
})


const handleSubmit=(e)=>{
e.preventDefault()
mutate({post:{title}})

}

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter equipment' className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"></input>
        <button type='submit' className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
></button>
    </form>
  )
}
