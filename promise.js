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
    },6000);
}

function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error)
            {
                resolve()
            }
            else
            {
                reject('Something went wrong')
            }
        },1000);     
    });
   
}
function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            if(posts.length>0)
            {
                resolve()
            }
            else
            {
                reject('Array is empty now')
            }
        },4000);     
    });
}

function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log(`Last user activity ${new Date()}`); 
        },1000);
    })
}


createPost({title:'Post three',body:'This is post three'}).then(getPosts);
deletePost().then(getPosts).catch(err=>console.log(err));
deletePost().then(getPosts).catch(err=>console.log(err));
deletePost().then(getPosts).catch(err=>console.log(err));
deletePost().then(getPosts).catch(err=>console.log(err));
createPost({title:'Post four',body:'This is post four'}).then(deletePost).catch(err=>console.log(err));
createPost({title:'Post five',body:'This is post three'}).then(updateLastUserActivityTime);

const promise1=Promise.resolve('Hello')
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye')
})

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))
