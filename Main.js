// Comment post function
// Step:1 Add button event handaler
document
  .getElementById("post-btn-event")
  .addEventListener("click", function () {
    // Step:2 Get user comment
    const commentBox = document.getElementById("new-comment");

    // Step:3 Create comment paragraph
    const newComment = document.createElement("p");
    newComment.innerText = commentBox.value;

    // Step:4 Append the comment where the appendchild
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);
    commentBox.value = "";
  });
