
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { Food, Set, Set_food, User } = require('./App/util/database');
// const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const app = express();
const passport = require('passport');
const passportJWT = require("passport-jwt");
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = passportJWT.ExtractJwt;
const Auth = require("./middleware/Auth");
const AuthController = require('./controllers/AuthController')
const jwt = require("jsonwebtoken");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(require('cookie-parser')())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }
}))

app.use(passport.session())
app.use(passport.initialize())

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "SECRET_KEY",
    },
    AuthController.isLoggedIn
  )
);

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        if (password.length <= 4 || !email) {
          done(null, false, { message: "Your credentials don't match our criteria" })
        } else {
          const hashedPass = await bcrypt.hash(password, 10)
          let user = { email, password: hashedPass }
          return done(null, user, { message: "Signed up successfully" })
        }
      } catch (err) {
        return done(err)
      }
    },
    AuthController.isRegistered
  )
);

passport.use(
  "signin",
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ where: { username: username } })
        console.log(user)
        if (!user) {
          return done(null, false, { message: 'User not found' })
        }
        const passwordMatches = await bcrypt.compare(password, user.password)
        if (!passwordMatches) {
          return done(null, false, { message: 'Password mismatch' })
        }
        return done(null, user, { message: "You are logged in successfully" })
      } catch (err) {
        return done(err)
      }
    },
    AuthController.isLoggedIn
  )
)


// Auth Methods
app.post('/signup', async (req, res, next) => {
  passport.authenticate('signup', async (error, user, info) => {
    if (error) return next(error)
    if (!user) res.send(info.message)
    else {
      user.username = req.body.username
      let userData = await User.create(user)
      const token = jwt.sign({ user: userData }, "SECRET_KEY")
      res.send({ user, token })
    }
  })(req, res, next)
})


// app.post(
//   "/signin", async (req, res, next) => {
//     passport.authenticate("signin", {
//       session: false,
//     }, async (error, user, info) => {
//       if (error) return next(error)
//       if (!user) res.send({ message: info.message })
//       else {
//         user.username = req.body.username
//         let userData = await User.findOne({ username: user.username, include: { all: true } })
//         const token = jwt.sign({ user: userData }, "SECRET_KEY")
//         // user = userData
//         res.send({ userData, token })
//       }
//     })(req, res, next)
//     // AuthController.signin
// });

app.post('/signin', passport.authenticate('signin', {
  session: false
}),
AuthController.signin
)

app.get("/profile", Auth(), AuthController.loggedUser);

// Food Methods
app.post('/addfood', async (req, res) => {
  let food = await Food.create(req.body)
  res.send({ food })
})
app.get('/foods', async (req, res) => {
  let foods = await Food.findAll()
  res.send(foods)
})
app.get('/food/:id', async (req, res) => {
  let singleFood = await Food.findOne({ where: { id: req.params.id }, include: { all: true } })
  res.send(singleFood)
})
// Set Methods
app.get('/showallset', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 6;
  const limit = pageSize;
  const offset = (page - 1) * limit;
  const sets = await Set.findAll({ include: { all: true, nested: true }, limit, offset })
  const totalSets = await Set.count()
  res.json({ sets, totalSets })
})

// Set_food Methods
app.get('/set/:id', async (req, res) => {
  let singleSet = await Set_food.findByPk(req.params.id)
  res.send({ singleSet })
})
app.post('/addset', async (req, res) => {
  let set = await Set.create({ name: req.body.name })
  for (let i = 0; i < req.body.food.length; i++) {
    const el = req.body.food[i];
    await Set_food.create({ foodId: el, setId: set.id })
  }
  let setItem = await Set.findOne({ where: { id: set.id }, include: { all: true, nested: true } })
  res.send(setItem)
})
app.delete('/set/:id', async (req, res) => {
  let id = req.params.id
  let deletedSet = await Set_food.destroy({
    where: {
      id: id
    }
  })
  res.send({ deletedSet })
})

app.listen(5000, () => {
  console.log('Listening on port 5000')
})
