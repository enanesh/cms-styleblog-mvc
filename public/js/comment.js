const comment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim();
    const postId = document.querySelector('#postId-input').value.trim();


    if (comment) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/post/' + postId);
        } else {
            alert('Failed to create comment');
        }
    }
};


const showCommentForm = async (event) => {
    document.querySelector('#newcomment-form').style.visibility = "visible"
}


document
    .querySelector('#newcomment-form')
    .addEventListener('submit', comment);

document
    .querySelector('#show-comment-button')
    .addEventListener('click', showCommentForm);


