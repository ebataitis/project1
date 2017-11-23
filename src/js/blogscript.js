console.log('blogscript running');

const DOMStrings = {
    blogLeftPost: document.querySelectorAll('.blog-left-post'),
    blogLeftPostButton: document.querySelectorAll('.blog-left-post button'),
    blogLeftPostText: document.querySelectorAll('.blog-left-post .post-text'),
    blogNav: document.querySelector('.blog-left ul'),
    shareComentArea: document.querySelector('.share-coment-area'),
    nav: document.querySelector('header .main-menu nav'),
    blogLeft: document.querySelector('.blog-left')
};
const blogLeftPost = Array.prototype.slice.call(DOMStrings.blogLeftPost);
const blogLeftPostText = Array.prototype.slice.call(DOMStrings.blogLeftPostText);
window.onload = function () {
    for (let i = 0; i < blogLeftPostText.length; i++) {
        blogLeftPostText[i].style.height = '72px'
    }
};
// paspaudus mygtuka issiskleidzia postas:
const g = Array.prototype.slice.call(DOMStrings.blogLeftPostButton);
var ind = g.length + 1;
for (let i = 0; i < g.length; i++) {
    (function (index) {
        g[i].onclick = function () {
            ind = index;
            let blogSpliced = blogLeftPost.splice(ind, 1);
            for (let j = 0; j < blogLeftPost.length; j++) {
                blogLeftPost[j].style.display = 'none';
            }
            blogLeftPostText[index].style.height = '';
            g[ind].style.display = 'none';
            DOMStrings.blogNav.style.display = 'none';
            DOMStrings.shareComentArea.style.display = 'block';
        }
    })(i);

}
$('.fa-bars').click(function () {
    $('header .main-menu nav').slideToggle()
})
window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
        DOMStrings.nav.style.display = "block";
    } else if (window.innerWidth <= 600) {
        DOMStrings.nav.style.display = "none";
    }
})
$.getJSON('http://localhost:3000/project1/dist/blognews.json', function (data) {
    data.news.forEach((item, i) => {
        console.log(item.date;)
        const html = `
        <div class="blog-left-post">
        <div class="img">
        <img src="${data.news[i].img}" alt="Blog foto">
        <div class="date">
        <p>${data.news[i].date1}</p>
        <p>${data.news[i].date2}</p>
</div>
</div>
<h3>${data.news[i].heading}</h3>
<p class="post-text">${data.news[i].postText}</p>
<div class="btn">
<button>${data.news[i].buttonText}</button>
</div>
</div>`;
        DOMStrings.blogLeft.insertAdjacentHTML('afterbegin', html);

        // kreipimasis i ikeltus mygtukus
        const blogLeftPostBtn = document.querySelectorAll('.blog-left-post button');
        const blogLeftText = document.querySelectorAll('.blog-left-post .post-text')
        blogLeftPostBtn.forEach((item, i) => {
            blogLeftText[i].style.height = '72px';
            item.addEventListener('click', function () {
                console.log('pyp');
                blogLeftText[i].style.color = 'red';
                blogLeftText[i].style.height = '';

            })
        })
    })
});
console.log(DOMStrings.blogLeftPostButton)