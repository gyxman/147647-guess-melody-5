const QuestionArtist = () => {
  return `
    <section class="game game--artist">
      <header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">Сыграть ещё раз</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
        </svg>

        <div class="game__mistakes">
          <div class="wrong"></div>
          <div class="wrong"></div>
          <div class="wrong"></div>
        </div>
      </header>

      <section class="game__screen">
        <h2 class="game__title">Кто исполняет эту песню?</h2>
        <div class="game__track">
          <div class="track">
            <button class="track__button track__button--play" type="button" />
            <div class="track__status">
              <audio />
            </div>
          </div>
        </div>

        <form class="game__artist">
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
            <label class="artist__name" htmlFor="answer-1">
              <img class="artist__picture" src="img/placeholder.jpg" alt="Пелагея" />
              Пелагея
            </label>
          </div>

          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
            <label class="artist__name" htmlFor="answer-2">
              <img class="artist__picture" src="img/placeholder.jpg" alt="Пелагея" />
              Краснознаменная дивизия имени моей бабушки
            </label>
          </div>

          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
            <label class="artist__name" htmlFor="answer-3">
              <img class="artist__picture" src="img/placeholder.jpg" alt="Пелагея" />
              Lorde
            </label>
          </div>
        </form>
      </section>
    </section>
  `;
};

export default QuestionArtist;
