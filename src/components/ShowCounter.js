
export const ShowCounter = (props) => {
  if (props.counter == -1) {
    return <div>読み込み中</div>;
  }
  return <div>あなたは {props.counter} 番目のお客様です</div>;
  
};
