import React from 'react'
import { supabase } from '../supabaseClient'
import { useQuery } from '@tanstack/react-query'


const fetchPosts=async ()=>{
 const {data,error}=await supabase.from("posts").select("*")
 if(error) throw new Error(error.message)
return data
}

export default function PostList() {

const {data,error,isLoading}=useQuery({queryKey:["posts"],queryFn:fetchPosts})
console.log(data)
  return (
    <div>{data?.map((item)=><p className='text-amber-300'>{item.title}</p>)}</div>
  )
}
