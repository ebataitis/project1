console.log('blogscript running');

const DOMStrings = {
    blogLeftPost: document.querySelectorAll('.blog-left-post'),
    blogLeftPostButton: document.querySelectorAll('.blog-left-post button'),
    blogLeftPostText: document.querySelectorAll('.blog-left-post .post-text'),
    blogNav: document.querySelector('.blog-left ul'),
    shareComentArea:document.querySelector('.share-coment-area'),
}
const blogLeftPost = Array.prototype.slice.call(DOMStrings.blogLeftPost);
const blogLeftPostText = Array.prototype.slice.call(DOMStrings.blogLeftPostText);
window.onload = function () {
    for (let i = 0; i < blogLeftPostText.length; i++) {

        blogLeftPostText[i].style.height = '72px'
    }
}
var g = Array.prototype.slice.call(DOMStrings.blogLeftPostButton);
var ind = g.length + 1;
for (var i = 0; i < g.length; i++) {

    (function (index) {
        g[i].onclick = function () {
            ind = index;
            var blogSpliced = blogLeftPost.splice(ind, 1);
            for (let j = 0; j < blogLeftPost.length; j++) {
                blogLeftPost[j].style.display = 'none';
            }
            blogLeftPostText[index].style.height = '';
            g[ind].style.display = 'none';
            DOMStrings.blogNav.style.display = 'none';
            DOMStrings.shareComentArea.style.display='block';
        }
    })(i);

}
