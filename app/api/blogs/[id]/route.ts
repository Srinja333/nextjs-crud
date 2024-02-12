import { deletePost, postById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET=async(req:Request,res:Response)=>{
   const id=req.url.split("/")[5]
//    console.log("idd",id)
try{
    const post=postById(id)
if(!post){
    return NextResponse.json({
        message:"error to get post by id",
        post
    },{
        status:404,
    })
}else{
    return NextResponse.json({
        message:"got post by id",
        post
        
    },{
        status:200,
    })
}
}catch(err){
    return NextResponse.json({
        message:"err in post by id",
        err
        
    },{
        status:500,
    })
}
    

}

export const PUT=async(req:Request,res:Response)=>{
    const id=req.url.split("/")[5]
    const {title,desc}=await req.json()
    try{
        updatePost(id,title,desc)

        return NextResponse.json({
            message:"updated  post by id"
            
        },{
            status:200,
        })
    }
    catch(err){
        return NextResponse.json({
            message:"err in update by id",
            err
            
        },{
            status:500,
        })
    }

}



export const DELETE=async(req:Request,res:Response)=>{
 
    try{
        const id=req.url.split("/")[5]
       deletePost(id)

        return NextResponse.json({
            message:"deleted  post by id"
            
        },{
            status:200,
        })
    }
    catch(err){
        return NextResponse.json({
            message:"err in delete by id",
            err
            
        },{
            status:500,
        })
    }

}