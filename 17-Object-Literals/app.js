let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.com",
  location: "berlin",
  blogs: [
    { title: "why mach and cheese rules", likes: 30 },
    { title: "10 things you can make with marmite", likes: 50 },
  ],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("the user logged out!");
  },
  logBlogs() {
    console.log("this user has written the following blogs");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();
// console.log(this);
