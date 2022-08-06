


const commentHandler =async (event) => {
    const commentval =document.querySelector('#textarea1').value.trim();
    console.log(commentval);
    const id = event.target.getAttribute('data-id');
 
    //const blogid = event.target.getAttribute('data-id');
    console.log("ak here "+id);
      const response = await fetch(`/api/opinion/${id}`, {
        method: 'POST',
        body: JSON.stringify({ 
          comment: commentval
         }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    if (response.ok) {
      document.location.replace('/api/blog');
    } else {
      alert('Failed to add comment');
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
  



document
.querySelector('.addcomment')
.addEventListener('click', commentHandler);




