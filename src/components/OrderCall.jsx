import { useRef } from "react";
import Notice from "./Notice";

export default function OrderCall({ change, el }) {
  const msgRef = useRef();
  function showAccess(e) {
    e.preventDefault();
    e.target.reset();
    msgRef.current.style.animationName = "showMessage";
    setTimeout(() => {
      msgRef.current.style.animationName = "";
    }, 1800);
  }
  return (
    <div className="order-call">
      <div className="close" onClick={() => change(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="37"
          viewBox="0 0 38 37"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.0736 4.08437C37.2958 3.86247 37.4721 3.59898 37.5924 3.30896C37.7128 3.01893 37.7748 2.70804 37.775 2.39404C37.7752 2.08003 37.7136 1.76907 37.5936 1.47889C37.4736 1.18872 37.2976 0.925015 37.0757 0.702844C36.8538 0.480674 36.5903 0.304386 36.3003 0.184044C36.0103 0.0637014 35.6994 0.00166272 35.3854 0.00146972C35.0714 0.00127673 34.7604 0.0629332 34.4702 0.182919C34.1801 0.302904 33.9164 0.478869 33.6942 0.700766L19.2744 15.1206L4.85878 0.700766C4.41009 0.252073 3.80153 -4.72775e-09 3.16698 0C2.53243 4.72775e-09 1.92387 0.252073 1.47518 0.700766C1.02649 1.14946 0.774414 1.75802 0.774414 2.39257C0.774414 3.02711 1.02649 3.63567 1.47518 4.08437L15.895 18.5L1.47518 32.9156C1.25301 33.1378 1.07677 33.4016 0.956537 33.6918C0.836299 33.9821 0.774414 34.2932 0.774414 34.6074C0.774414 34.9216 0.836299 35.2327 0.956537 35.523C1.07677 35.8133 1.25301 36.0771 1.47518 36.2992C1.92387 36.7479 2.53243 37 3.16698 37C3.48118 37 3.7923 36.9381 4.08258 36.8179C4.37286 36.6976 4.63661 36.5214 4.85878 36.2992L19.2744 21.8794L33.6942 36.2992C34.1429 36.7474 34.7512 36.9989 35.3854 36.9985C36.0196 36.9981 36.6276 36.7458 37.0757 36.2971C37.5239 35.8485 37.7754 35.2401 37.775 34.606C37.7746 33.9718 37.5223 33.3638 37.0736 32.9156L22.6539 18.5L37.0736 4.08437Z"
            fill="#12724F"
          />
        </svg>
      </div>
      <h2 className="title">ՊԱՏՎԻՐԵԼ ԶԱՆԳ</h2>
      <form ref={el} onSubmit={showAccess} className="fb-form">
        <div className="name-surname">
          <input type="text" name="name" placeholder="Անուն" />
          <input type="text" name="surname" placeholder="Ազգանուն" />
        </div>
        <input type="text" name="phone" placeholder="Հեռախոսահամար" />
        <textarea placeholder="Ծառայության անվանումը" />
        <button type="submit" className="btn" onClick={() => change(true)}>
          Պատվիրել
        </button>
        <div ref={msgRef} className="notice">
          <Notice type="call" />
        </div>
      </form>
    </div>
  );
}
