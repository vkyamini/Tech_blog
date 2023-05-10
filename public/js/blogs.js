const fetchBlogs = () => {
  fetch(`/api/blogpost`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })
}

fetchBlogs();