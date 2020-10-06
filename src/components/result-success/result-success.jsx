const ResultSuccess = () => {
  return `<section class="result">
    <div class="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">Вы&nbsp;ответили правильно на 6 вопросов и совершили 2&nbsp;ошибки</p>
    <button class="replay" type="button">Сыграть ещё раз</button>
  </section>`;
};

export default ResultSuccess;
