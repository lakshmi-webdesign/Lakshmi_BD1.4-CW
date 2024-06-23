let express = require("express");
let app = express();
const PORT = 3000;

function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(name) {
  return "Hello, " + name + "!";
}

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "strong";
  } else {
    return "weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send("Password is " + checkPasswordStrength(password));
});

function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

app.get("/discounted-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  return discountedPrice + discountedPrice * (tax / 100);
}

app.get("/final-price", (req, res) => {
  let price = parseInt(req.query.price);
  let discount = parseInt(req.query.discount);
  let tax = parseInt(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
