type Post={
    id:string;
    title:string;
    desc:string;
    date:Date;

};

let posts:Post[]=[]


export const getPosts=()=>posts;

export const addPost=(post:Post)=>{
    posts.push(post)
}

export const deletePost=(id:string)=>{
    posts=posts.filter((p)=>p.id!==id)
}

export const updatePost=(id:string,title:string,desc:string)=>{
    let post=posts.find((p)=>p.id==id)
    if(post){
        post.title=title;
        post.desc=desc;
        
    }else{
        throw new Error("no posts found")
    }
}

export const postById=(id:string)=>{
    return posts.find((p)=>p.id==id)
}