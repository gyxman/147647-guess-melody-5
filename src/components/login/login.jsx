const Login = () => {
  return `<section class="login">
    <div class="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <h2 class="login__title">Вы настоящий меломан!</h2>
    <p class="login__text">Хотите узнать свой результат? Представтесь!</p>
    <form class="login__form" action="">
      <p class="login__field">
        <label class="login__label" htmlFor="name">Логин</label>
        <input class="login__input" type="text" name="name" id="name">
      </p>
      <p class="login__field">
        <label class="login__label" htmlFor="password">Пароль</label>
        <input class="login__input" type="text" name="password" id="password">
        <span class="login__error">Неверный пароль</span>
      </p>
      <button class="login__button button" type="submit">Войти</button>
    </form>
    <button class="replay" type="button">Сыграть ещё раз</button>
  </section>`;
};

export default Login;
