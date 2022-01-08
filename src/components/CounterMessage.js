import React, { useContext } from "react";
import { CountContext } from "../pages/App";
export const CounterMessage = () => {
  const { counter, prime, error } = useContext(CountContext);
  if (error) {
    return (
      <div>
        <div>エラー</div>
        <div>アクセス数データの取得に失敗しました</div>
      </div>
    );
  } else if (counter == -1) {
    return (
      <div>
        <div>カウンター読み込み中…</div>
        <div>少々お待ちください</div>
      </div>
    );
  } else if (counter != -1 && prime == -1) {
    return (
      <div>
        <div>あなたは {counter} 番目のお客様です</div>
        <div>素数計算中…</div>
      </div>
    );
  }
  return (
    <div>
      <div>あなたは {counter} 番目のお客様です</div>
      <div>
        {counter} 番目の素数は、 {prime} です↑
      </div>
    </div>
  );
};
