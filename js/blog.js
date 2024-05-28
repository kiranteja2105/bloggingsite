const banner = document.querySelector('.banner');
const blogTitle = document.querySelector('.title');
const published = document.querySelector('.published');
const article = document.querySelector('.article');

// Get blog ID from URL
const blogId = decodeURI(location.pathname.split("/").pop());

// Fetch the blog from Firestore
db.collection("blogs").doc(blogId).get().then((doc) => {
    if (doc.exists) {
        let data = doc.data();
        banner.style.backgroundImage = `url(${data.bannerImage})`;
        blogTitle.innerHTML = data.title;
        published.innerHTML += data.createdAt.toDate().toDateString();
        article.innerHTML = data.article;
    } else {
        location.replace("/");
    }
}).catch((error) => {
    console.error("Error fetching blog: ", error);
    location.replace("/");
});

// Fetch related blogs
db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if (blog.id != blogId) {
            createBlog(blog);
        }
    });
}).catch(error => {
    console.error("Error fetching blogs: ", error);
});

// Function to create and append related blog cards to the blog section
const createBlog = (blog) => {
    let data = blog.data();
    document.querySelector('.blogs-section').innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="Blog Banner">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">Read</a>
    </div>
    `;
};
