
export const ShowCounter = (props) => {
  if (props.counter == -1) {
    return <div>読み込み中…</div>;
  }
  return (
    <div>
      <p>{props.prime}</p>
      <p>あなたは {props.counter} 番目のお客様です</p>
      <p>{props.counter}番目の素数は、{props.prime}です。</p>
    </div>
  );
};
