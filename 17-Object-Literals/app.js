let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.com",
  location: "berlin",
  blogs: ["why mach and cheese rules", "10 things you can make with marmite"],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("the user logged out!");
  },
  logBlogs() {
    console.log("this user has written the following blogs");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.logBlogs();
// console.log(this);
