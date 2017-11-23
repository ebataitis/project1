<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Blog</title>
    <?php include 'parts/head.php' ?>
</head>

<body>
<?php include 'parts/header.php' ?>
<div class="heading-top">
    <div class="container">
        <h2>BLOG</h2>
        <h3><a href="index.php">Home</a>>Blog</h3>

    </div>
</div>
<section class="blog">
    <div class="container">
        <div class="blog-left">
            <div class="blog-left-post">
                <div class="img">
                    <img src="img/blog/left1.jpeg" alt="blog-left-foto">
                    <div class="date">
                        <p>DATE</p>
                        <p>March 24,2015</p>
                    </div>
                </div>
                <h3>Steps Toward Developing A Content Strategy</h3>
                <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores harum accusamus
                    nemo commodi, dignissimos sunt repudiandae, reprehenderit earum accusantium molestiae deleniti amet.
                    Aperiam ab quis sed perspiciatis aliquam doloremque Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Esse velit, repudiandae veritatis vel ullam minima, sed deserunt ex expedita
                    cumque perspiciatis laudantium nisi est asperiores placeat tempore sit, quis harum. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Iste impedit facere quasi cum tempore, cumque, id
                    commodi quos necessitatibus nisi. Modi illo sint quae, quasi obcaecati esse asperiores deserunt
                    dolorum!</p>
                <div class="btn">
                    <button>READ more</button>
                </div>
            </div>
            <div class="blog-left-post">
                <div class="img">
                    <img src="img/blog/left2.jpeg" alt="blog-left-foto">
                    <div class="date">
                        <p>DATE</p>
                        <p>March 24,2015</p>
                    </div>
                </div>
                <h3>Looking for Developers? Try This Geeky Community</h3>
                <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores harum accusamus
                    nemo commodi, dignissimos sunt repudiandae, reprehenderit earum accusantium molestiae deleniti amet.
                    Aperiam ab quis sed perspiciatis aliquam doloremque in. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Minima quod iste magnam deserunt eveniet maiores placeat, architecto, quisquam
                    nostrum facere esse suscipit. Natus neque eveniet deleniti laborum nulla perferendis numquam!</p>
                <div class="btn">
                    <button>READ more</button>
                </div>
            </div>
            <div class="blog-left-post">
                <div class="img">
                    <img src="img/blog/left3.jpeg" alt="blog-left-foto">
                    <div class="date">
                        <p>DATE</p>
                        <p>March 24,2015</p>
                    </div>
                </div>
                <h3>How to Spend Less Than an Hour a Day on Email Marketing</h3>
                <p class="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores harum accusamus
                    nemo commodi, dignissimos sunt repudiandae, reprehenderit earum accusantium molestiae deleniti amet.
                    Aperiam ab quis sed perspiciatis aliquam doloremque in.</p>
                <div class="btn">
                    <button>READ more</button>
                </div>
            </div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
            </ul>
            <div class="share-coment-area">
                <div class="share-area">

                </div>

                <div class="inputs">
                    <form action="" method="get">
                        <input type="text" placeholder=" Name">
                        <input type="text" placeholder="Your E-Mail">
                        <input type="text" placeholder="Website">
                        <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <input type="submit" class="submit" value="SUBMIT A COMMENT">
                    </form>
                </div>
            </div>


        </div>
        <div class="blog-right">
            <div class="search"><input type="text" placeholder="Search">
                <input type="submit" value=""></div>
            <h3>Recent Posts</h3>
            <div class="wrapper">
                <div class="wrapper-left">
                    <img src="img/blog/right1.jpg" alt="Post image">
                </div>
                <div class="wrapper-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <h4>Virtual polaroid ugh</h4>
                </div>
            </div>
            <div class="wrapper">
                <div class="wrapper-left">
                    <img src="img/blog/right2.jpeg" alt="Post image">
                </div>
                <div class="wrapper-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lghjastbx ajsgfbx</p>
                    <h4>Virtual polaroid ugh</h4>
                </div>
            </div>
            <div class="wrapper">
                <div class="wrapper-left">
                    <img src="img/blog/right3.jpeg" alt="Post image">
                </div>
                <div class="wrapper-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <h4>Virtual polaroid ugh</h4>
                </div>
            </div>
            <div class="wrapper">
                <div class="wrapper-left">
                    <img src="img/blog/right4.jpeg" alt="Post image">
                </div>
                <div class="wrapper-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <h4>Virtual polaroid ugh</h4>
                </div>
            </div>
            <div class="gallery">
                <h3>LATEST PROJECTS</h3>
                <img src="img/blog/right1.jpg" alt="photo">
                <img src="img/blog/right2.jpeg" alt="photo">
                <img src="img/blog/right3.jpeg" alt="photo">
                <img src="img/blog/right4.jpeg" alt="photo">
            </div>
            <ul>
                <h3>Blog Categories</h3>
                <li><a href="">Building</a></li>
                <li><a href="">Company</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Tips</a></li>
            </ul>
        </div>
    </div>
</section>

<?php include 'parts/footer.php' ?>
<script src="js/files/blogscript.js"></script>
</body>

</html>
