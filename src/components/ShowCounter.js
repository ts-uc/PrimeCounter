import { CalcPrime } from "./CalcPrime";

export const ShowCounter = (props) => {
  if (props.counter == -1) {
    return <div>読み込み中…</div>;
  }
  return (
    <div>
      <p>あなたは {props.counter} 番目のお客様です</p>
      <CalcPrime counter={props.counter}/>
    </div>
  );
};
