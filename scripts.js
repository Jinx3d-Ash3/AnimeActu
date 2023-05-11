$(document).ready(function() {
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box").not('.' + value).hide("1000");
            $(".post-box").filter('.' + value).show("1000");
        }
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

let header = document.querySelector('header');
window.addEventListener("scroll", () =>
{
    header.classList.toggle("shadow", window.scrollY > 0);
});
  
 const postContainer = document.querySelector('.container');
 const posts = [...postContainer.children];
 
 console.log(posts);
 
 posts.sort((a, b) => 
{
   console.log(a.querySelector('.post-date'));
   console.log(b.querySelector('.post-date'));
   const dateA = new Date(a.querySelector('.post-date').textContent);
   const dateB = new Date(b.querySelector('.post-date').textContent);
   return dateB - dateA;
});
 
 posts.forEach(post => postContainer.appendChild(post));

 function search_animal() {
    var input = document.getElementById("searchbar");
    var filter = input.value.toUpperCase();
    var post_boxes = document.getElementsByClassName("post-box");
  
    for (var i = 0; i < post_boxes.length; i++) {
      var post_title = post_boxes[i].querySelector(".post-title");
      if (post_title.innerText.toUpperCase().indexOf(filter) > -1) {
        post_boxes[i].style.display = "";
      } else {
        post_boxes[i].style.display = "none";
      }
    }
  }
