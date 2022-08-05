const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  
  const description = document.querySelector('#blog-desc').value.trim();

// const commentval =document.querySelector('#textarea1').value.trim();


  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};






const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};


/*
const commentHandler =async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const blogid = event.target.getAttribute('data-id');
    console.log(blogid);
      const response = await fetch(`/api/opinion`, {
        method: 'POST',
        body: JSON.stringify({ 
          comment: commentval, 
          blog_id: blogid }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add comment');
    }
  }
};


*/
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
/*
document
.querySelector('.comment')
.addEventListener('click', commentHandler);*/