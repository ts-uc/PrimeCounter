import { Link } from "react-router-dom";
import TUPortfolio from "../assets/TUPortfolio.png"
import ReactBook from "../assets/ReactBook.png"

export const Products = () => {
  return (
    <div className="contents_wrap">
      <h1>技術作品集</h1>
      <hr />
      <h2>T.U.のポートフォリオ</h2>
      <img src={TUPortfolio} width="75%" />
      <ul>
        <li>このサイト</li>
        <li>React+Firebaseで制作しました。</li>
        <li><Link to="/aboutthispage">詳細については、こちらをご覧ください</Link></li>
        <li><a href="https://github.com/ts-uc/primecounter">ソースコードはこちら</a></li>
      </ul>
      <hr />
      <h2>React Book</h2>
      <img src={ReactBook} width="75%" />
      <ul>
        <li>Reactアプリを一から作る技術、およびAPIに関する知識と実装方法を身につけるために作成しました。</li>
        <li>APIは、学習目的に公開されてあるAPIである<a href="https://app.swaggerhub.com/apis-docs/Takumaron/TechTrain-RailwayMission/1.0.0#/book/post_books">こちら</a>を使用しています。</li>
        <li>アプリ作成の練習目的で作成したもののため、CSSは最低限のみとなっています。</li>
        <li>create-react-appにReactアプリの雛形を作成してもらい、それに React Router・axios・Formikを使って作成しました。</li>
        <li><a href="https://github.com/ts-uc/react-book">ソースコードはこちら</a></li>
      </ul>
      <hr />
    </div>
  );
};
