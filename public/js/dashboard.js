const commentFormHandler = async (event) => {
    event.preventDefault();

 const commentval =document.querySelector('#textarea1').value.trim();
console.log(commentval);

const commentHandler =async (event) => {
  if (event.target.hasAttribute('data-up')) {

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
      document.location.replace('/blog');
    } else {
      alert('Failed to add comment');
    }
  }
};
document
.querySelector('.comment')
.addEventListener('click', commentHandler);
}


