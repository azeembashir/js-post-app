let isDarkMode = false;

function addPost() {
  const content = document.getElementById("postContent").value;
  if (content === "") {
    alert("Post content cannot be empty!");
    return;
  }

  const postsContainer = document.getElementById("postsContainer");
  const postDiv = document.createElement("div");
  postDiv.className = "post";
  postDiv.textContent = content;
  postsContainer.prepend(postDiv); 

  document.getElementById("postContent").value = "";
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.style.backgroundImage = isDarkMode ? "url('images/1.gif')" : "url('images/3.gif')";
//   document.body.style.color = isDarkMode ? "black" : "black";
}
