
async function newBlog(event){
  event.preventDefault();

  const title = document.querySelector('#blog-title').value;
  const content = document.querySelector('#content').value;
  // const creater_name =  document.querySelector('#creater-name').value;

  const response = await fetch(`/api/blogpost`,{
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      
     }),
    headers: {
      'Content-Type': 'application/json',
    },
        
  });
    
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }
  
}
document.querySelector('.new-blog').addEventListener('submit', newBlog);


// async function deleteblog(event){
//   event.preventDefault();
  
//   // 1. Get it from the URL
//   // const id = window.location.pathname.split("/")[2];
//   // 2. Get it from HTML (can't use ID or Class).
//   const id = this.dataset.blogId;
  
//   const response = await fetch(`/api/blogpost/delete/${id}`,{
//     method: 'DELETE',
//      headers: {
//       'Content-Type': 'application/json',
//     },

//   })
//   console.log(' i am from the deleted form',response)
//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert('Failed to delete form');
//   }

// }

// //   const blogId = document.querySelector('.edit-blogs').ATTRIBUTE_NODE();
// document.querySelector('.delete-blogs').addEventListener('submit', deleteblog);