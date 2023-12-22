const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors"); // Agregar esta línea

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const apisRouter = require("./routes/api.routes");
const userSessionCheck = require("./middlewares/userSessionCheck");
const cookieCheck = require("./middlewares/cookieCheck");
const app = express();

/* Configuración de CORS */
const corsOptions = {
  origin: 'http://localhost:5173', // Permitir solicitudes desde este origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  headers: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Encabezados permitidos
};

app.use(cors(corsOptions));

/* setup PUT & DELETE */
app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  session({
    secret: "ticketPro",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieCheck);
app.use(userSessionCheck);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/api", apisRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
