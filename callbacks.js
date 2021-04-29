const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
]

function getPosts()
{
    setTimeout(()=>{
       let output='';
       posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
       });
       document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback)
{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function create4thPost(post,callback)
{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);
}
function getLastEditTime()
{
    setTimeout(()=>{
        let output='';
        var current = new Date();
        posts.forEach((post,index)=>{
         output+=`<li>${post.title} last edited ${current}</li>`;
        });
        document.body.innerHTML=output;
     },5000);
}


createPost({title:'Post three',body:'This is post three'},getPosts)
create4thPost({title:'Post four',body:'This is post four'},getPosts)
getLastEditTime()