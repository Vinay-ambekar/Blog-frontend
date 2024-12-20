const Home = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  <a href="index.html" className="logo m-0 float-start">
                    Blogy<span className="text-primary">.</span>
                  </a>
                </div>
                <div className="col-8 text-center">
                  <form
                    action="#"
                    className="search-form d-inline-block d-lg-none"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bi-search"></span>
                  </form>

                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="has-children active">
                      <a href="category.html">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="search-result.html">Search Result</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="single.html">Blog Single</a>
                        </li>
                        <li>
                          <a href="category.html">Category</a>
                        </li>
                        <li className="active">
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Menu One</a>
                        </li>
                        <li>
                          <a href="#">Menu Two</a>
                        </li>
                        <li className="has-children">
                          <a href="#">Dropdown</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Sub Menu One</a>
                            </li>
                            <li>
                              <a href="#">Sub Menu Two</a>
                            </li>
                            <li>
                              <a href="#">Sub Menu Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="category.html">Culture</a>
                    </li>
                    <li>
                      <a href="category.html">Business</a>
                    </li>
                    <li>
                      <a href="category.html">Politics</a>
                    </li>
                  </ul>
                </div>
                <div className="col-2 text-end">
                  <a
                    href="#"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  >
                    <span></span>
                  </a>
                  <form
                    action="#"
                    className="search-form d-none d-lg-inline-block"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bi-search"></span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="site-cover site-cover-sm same-height overlay single-page" /* style={{backgroundImage: "url('./assets/images/hero_5.jpg')"}} */
      >
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-6">
              <div className="post-entry text-center">
                <h1 className="mb-4">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section sec-halfs py-0">
        <div className="container">
          <div className="half-content d-lg-flex align-items-stretch">
            <div
              className="img"
              /* style={{backgroundImage: "url('./assets/images/hero_1.jpg')"}} */ data-aos="fade-in"
              data-aos-delay="100"
            ></div>
            <div className="text">
              <h2 className="heading text-primary mb-3">
                Resources for makers and creatives
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Read more
                </a>
              </p>
            </div>
          </div>

          <div className="half-content d-lg-flex align-items-stretch">
            <div
              className="img order-md-2"
              /* style={{backgroundImage: "url('./assets/images/hero_2.jpg')"}} */ data-aos="fade-in"
            ></div>
            <div className="text">
              <h2 className="heading text-primary mb-3">
                We are trusted by more than 5,000 clients
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section sec-features">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="feature d-flex">
                <span className="bi-bag-check-fill"></span>
                <div>
                  <h3>Building your blog</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature d-flex">
                <span className="bi-wallet-fill"></span>
                <div>
                  <h3>Resources and insights</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature d-flex">
                <span className="bi-pie-chart-fill"></span>
                <div>
                  <h3>Blog just for you</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center" data-aos="fade-up">
              <h2 className="heading text-primary">Our Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img
                src="images/person_1.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">James Griffin</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="images/person_2.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Claire Smith</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/person_3.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Jessica Wilson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>

            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img
                src="images/person_4.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">William Anderson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="images/person_5.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Julie Harvey</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/person_2.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Shana Clarkson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src="images/img_7_sq.jpg"
                alt="Image"
                className="img-fluid rounded
                "
              />
            </div>
            <div className="col-lg-4 ps-lg-2">
              <div className="mb-5">
                <h2 className="text-black h4">
                  Publishing platform for professional bloggers
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-wallet-fill me-4"></span>
                </div>
                <div>
                  <h3>Building your blog</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-pie-chart-fill me-4"></span>
                </div>
                <div>
                  <h3>Resources and insights</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-bag-check-fill me-4"></span>
                </div>
                <div>
                  <h3>Blog just for you</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="mb-4">About</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>{" "}
              {/* <!-- /.widget --> */}
              <div className="widget">
                <h3>Social</h3>
                <ul className="list-unstyled social">
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-pinterest"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!-- /.widget --> */}
            </div>{" "}
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4 ps-lg-5">
              <div className="widget">
                <h3 className="mb-4">Company</h3>
                <ul className="list-unstyled float-start links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Vision</a>
                  </li>
                  <li>
                    <a href="#">Mission</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
                <ul className="list-unstyled float-start links">
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Creative</a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!-- /.widget --> */}
            </div>{" "}
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="mb-4">Recent Post Entry</h3>
                <div className="post-entry-footer">
                  <ul>
                    <li>
                      <a href="">
                        <img
                          src="images/img_1_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_2_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_3_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* <!-- /.widget --> */}
            </div>{" "}
            {/* <!-- /.col-lg-4 --> */}
          </div>{" "}
          {/* <!-- /.row --> */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              {/* <!-- 
          **==========
          NOTE: 
          Please don't remove this copyright link unless you buy the license here https://untree.co/license/  
          **==========
        --> */}

              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>. All
                Rights Reserved. &mdash; Designed with love by{" "}
                <a href="https://untree.co">Untree.co</a> Distributed by{" "}
                <a href="https://themewagon.com">ThemeWagon</a>{" "}
                {/* <!-- License information: https://untree.co/license/ --> */}
              </p>
            </div>
          </div>
        </div>
        {/*  <!-- /.container --> */}
      </footer>{" "}
      {/* <!-- /.site-footer --> */}
      
      {/* <!-- Preloader --> */}
      {/* <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> */}

      {/* <script src="js/bootstrap.bundle.min.js"></script>
<script src="js/tiny-slider.js"></script>

<script src="js/flatpickr.min.js"></script>


<script src="js/aos.js"></script>
<script src="js/glightbox.min.js"></script>
<script src="js/navbar.js"></script>
<script src="js/counter.js"></script>
<script src="js/custom.js"></script> */}
    </>
  );
};
export default Home;
