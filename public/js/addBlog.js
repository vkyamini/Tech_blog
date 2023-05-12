
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

