document.querySelector('.publish-btn').addEventListener('click', () => {
    const title = document.querySelector('.title').value;
    const article = document.querySelector('.article').value;

    if (title.trim() && article.trim()) {
        db.collection('blogs').add({
            title: title,
            article: article,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Blog published successfully!');
            document.querySelector('.title').value = '';
            document.querySelector('.article').value = '';
        }).catch(error => {
            console.error('Error publishing blog: ', error);
            alert('Failed to publish blog.');
        });
    } else {
        alert('Title and article cannot be empty.');
    }
});
