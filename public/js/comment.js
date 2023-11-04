const saveComment = async (event) => {
  event.preventDefault();

  const postId = document.querySelector("#comment-btn").getAttribute("post-id");
  const comment = document.querySelector("#new-comment").value.trim();

  const newComment = {
    post_id: postId,
    comment: comment,
  };
  if (newComment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Comment failed to post");
    }
  }
};

document.querySelector("#comment-btn").addEventListener("click", saveComment);
