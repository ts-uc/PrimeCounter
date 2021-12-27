export const ShowPrime = (props) => {
  if (props.prime == -1) {
    return <p>素数計算中…</p>;
  }
  return <p>{props.counter}番目の素数は、{props.prime}です。</p>;
};
