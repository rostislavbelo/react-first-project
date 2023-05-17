import "./statistics.css";
import { Header } from "../../components/Header/Header"

export function Statistics(props) {
  return (
    <div className="wrapper">
      <Header />
      <div className="statistics">
        <div className="statistics__top">
          <p>Ваша активность</p>
          <div className="statistics__select">
            <div className="statistics__select__current">
              <span>Эта неделя</span>
            </div>
            <div className="statistics__select__list">
              <span>Эта неделя</span>
              <span>Прошедшая неделя</span>
              <span>2 недели назад</span>
            </div>
          </div>
        </div>

        <div className="statistics__info">
          <div className="statistics__day">
            <span>{props.day}</span>
            <span>{props.timeDay}</span>
          </div>
          <div className="statistics__pomodors">
            <div className="statistics__pomodors-no-active">
              <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z" fill="#DC3E22" />
                  <path d="M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z" fill="#899441" />
                  <path d="M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z" fill="#A8B64F" />
                  <circle cx="41.5" cy="64.5" r="2.5" fill="black" />
                  <g filter="url(#filter0_f_16_527)">
                    <circle cx="29.5" cy="75.5" r="5.5" fill="#EA8979" />
                  </g>
                  <g filter="url(#filter1_f_16_527)">
                    <circle cx="85.5" cy="75.5" r="5.5" fill="#EA8979" />
                  </g>
                  <circle cx="73.5" cy="64.5" r="2.5" fill="black" />
                  <path d="M46 78C50 82 64.5 83 68.5 78" stroke="black" />
                </g>
                <defs>
                  <filter id="filter0_f_16_527" x="20" y="66" width="19" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_16_527" />
                  </filter>
                  <filter id="filter1_f_16_527" x="76" y="66" width="19" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_16_527" />
                  </filter>
                  <clipPath id="clip0_16_527">
                    <rect width="115" height="115" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <div className="statistics__pomodors-active">
              <div>
                <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M78.8031 47.4453C78.8031 68.5505 61.6937 81.2964 40.5884 81.2964C19.4825 81.2964 2.37305 64.187 2.37305 43.0811C2.37305 21.9758 20.017 9.00003 41.1223 9.00003C62.2283 9.00003 78.8031 26.3393 78.8031 47.4453Z" fill="#DC3E22" />
                    <path d="M57.1821 25.5283C55.3254 23.6378 52.3214 21.8798 50.0845 21.3658C51.3138 20.2757 51.5612 20.2398 53.1011 19.4768C57.0471 17.5237 62.8917 17.3438 62.8917 17.3438C62.8917 17.3438 55.9932 13.7785 50.9492 14.0022C49.6651 14.0587 48.3107 14.5124 47.004 15.1552C47.7408 14.1154 48.439 13.0815 48.8853 12.3048C50.2508 9.92997 51.6862 6.93822 51.6862 6.93822C51.6862 6.93822 46.3974 7.22062 43.9441 10.1567C43.0125 11.2721 42.3092 12.6892 41.7945 14.0186C40.8804 12.9685 39.8715 12.0334 38.8625 11.3035C33.8174 7.65241 25.7565 8.4423 25.7565 8.4423C25.7565 8.4423 31.8459 11.8966 34.5857 15.3425C35.6554 16.6882 36.7411 17.3106 37.3901 18.8194C35.1468 18.3337 30.0853 18.4997 27.6007 19.4209C21.2162 21.7888 18.4651 31.3165 18.4651 31.3165C18.4651 31.3165 24.6953 27.0221 33.1722 24.0095C35.036 23.3473 37.0065 23.1718 38.7239 23.202C37.9443 24.4165 37.0926 25.9936 36.4481 27.8531C34.88 32.3805 36.9521 43.1555 36.9521 43.1555C36.9521 43.1555 41.4915 36.7834 43.3412 31.6218C44.2905 28.9723 44.5255 26.3121 44.5307 24.3491C46.2141 25.0961 48.1968 26.1872 49.6786 27.131C57.2658 31.9651 60.8959 40.7907 60.8959 40.7907C60.8959 40.7907 61.9531 30.3871 57.1821 25.5283Z" fill="#899441" />
                    <path d="M41.5144 20.8766C41.4903 20.8766 41.4662 20.876 41.4421 20.8754C39.9416 20.8365 38.757 19.5894 38.7934 18.0902C38.7965 17.9604 38.9275 8.83157 33.8564 4.86227C32.6735 3.93653 32.4647 2.2272 33.3904 1.04376C34.3168 -0.139053 36.0261 -0.347931 37.2089 0.578423C44.4609 6.25335 44.2446 17.7416 44.2323 18.228C44.1933 19.705 42.9833 20.8766 41.5144 20.8766Z" fill="#A8B64F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_566">
                      <rect width="81" height="81" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span><span>х</span><span>{props.pomodorsDay}</span></span>
              </div>
            </div>
            <div>
              <span>
                <span>{props.pomodorsDay}</span>
                <span>помидор</span>
              </span>
            </div>

          </div>

          <div className="statistics__diagram">

          </div>

        </div>

        <div className="statistics__analytics">
          <div className="statistics__focus">
            <span className="statistics__analytics-title">Фокус</span>
            <span className="statistics__focus-value">
              <span>0</span>
              <span>%</span>
            </span>
            <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



          </div>
          <div className="statistics__paused">
            <span className="statistics__analytics-title">Время на паузе</span>
            <span className="statistics__paused-value">
              <span>0</span>
              <span>с</span>
            </span>
            <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M57.3154 30.1579V57.3158L70.8944 70.8947" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </div>
          <div className="statistics__stoped">
            <span className="statistics__analytics-title">Остановки</span>
            <span className="statistics__stoped-value">0</span>
            <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 20L95 94" stroke="#C4C4C4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>

        </div>





      </div>
    </div >
  );
}
