import { addPost, getPosts } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET=async(req:Request,res:Response)=>{
   try{
const posts=getPosts()
return NextResponse.json({
    message:"got all posts",
    posts
},{
    status:200
})
   }catch(error){
    return NextResponse.json({
        message:"error in blogs get function",
        error
    },{
        status:500,
    })
   }

}

export const POST=async(req:Request,res:Response)=>{
   const {title,desc}=await req.json();
   try{
    const post={
        "id":Date.now().toString(),
        title,
      desc,
        "date":new Date()
    }
    addPost(post)
    return NextResponse.json({
        message:"posted in blogs post function",
        
    },{
        status:200,
    })
   }catch(error){
    return NextResponse.json({
        message:"error in blogs post function",
        error
    },{
        status:500,
    })
   }

}