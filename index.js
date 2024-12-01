let likes_counter = 0;
const like_button = document.getElementById("like_button");

//first use of function and parameters. Increments the number of likes
const add_like = (increment_by) => {
  likes_counter += increment_by;
  // show number of likes on the button
  console.log(likes_counter);
  like_button.innerText = `(${likes_counter}) Like 👍`;

  if (likes_counter === 10) {
    alert("CONGRATS!");
  }
};

// Object
const person = {
  name: "Kirk",
  age: 42,
  has_job: true,
  greeting: () => {
    console.log(person.name + ", just ship it!");
  },
};

person.greeting();
like_button.addEventListener("click", () => add_like(1));
