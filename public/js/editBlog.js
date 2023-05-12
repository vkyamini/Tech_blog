
async function editblog(event){
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // 1. Get it from the URL
    // const id = window.location.pathname.split("/")[2];
    // 2. Get it from HTML (can't use ID or Class).
    const id = this.dataset.blogId;
    
    const response = await fetch(`/api/blogpost/${id}`,{
      method: 'PUT',
      body: JSON.stringify({
        title,
        content,
        
       }),
      headers: {
        'Content-Type': 'application/json',
      },
  
    })
    console.log(' i am from the edit form',response)
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to edit dish');
    }
  
  }
  
//   const blogId = document.querySelector('.edit-blogs').ATTRIBUTE_NODE();
document.querySelector('.edit-blogs').addEventListener('submit', editblog);



async function deleteblog(event){
  event.preventDefault();
  
  // 1. Get it from the URL
   const id = window.location.pathname.split("/")[2];
  // 2. Get it from HTML (can't use ID or Class).
  //const id = this.dataset.blogId;
  
  const response = await fetch(`/api/blogpost/delete/${id}`,{
    method: 'DELETE',
     headers: {
      'Content-Type': 'application/json',
    },

  })
  console.log(' i am from the deleted form',response)
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to delete form');
  }

}

//   const blogId = document.querySelector('.edit-blogs').ATTRIBUTE_NODE();
//document.querySelector('.edit-blogs').addEventListener('submit', deleteblog);
const deletBtn = document.querySelector('#delete-btn')
//console.log (deletBtn)
deletBtn.addEventListener('click',deleteblog )
