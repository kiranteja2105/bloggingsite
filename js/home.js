const blogSection = document.querySelector('.blogs-section');

// Fetch blogs from Firestore
db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        // Check if the current blog ID is not the same as the one in the URL
        if (blog.id != decodeURI(location.pathname.split("/").pop())) {
            createBlog(blog);
        }
    });
}).catch(error => {
    console.error("Error fetching blogs: ", error);
});

// Function to create and append blog cards to the blog section
const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="Blog Banner">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">Read</a>
    </div>
    `;
};
