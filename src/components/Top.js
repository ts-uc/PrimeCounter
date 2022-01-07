import star_and_me from "../assets/star_and_me.jpg"

export const Top = (props) => {
    return (
      <div className="Top">
        <p>count={props.counter}</p>
        <p>prime={props.prime}</p>
        <h1>T.U. のポートフォリオへようこそ</h1>
        <img src={star_and_me} width="50%" />
      </div>
    );
  };
  