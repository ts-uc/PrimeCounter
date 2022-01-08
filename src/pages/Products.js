import { Link } from "react-router-dom";
import TUPortfolio from "../assets/TUPortfolio.png";
import ReactBook from "../assets/ReactBook.png";
import toICN from "../assets/toICN.png";

export const Products = () => {
  return (
    <div className="contents_wrap">
      <h1>技術作品集</h1>
      <hr />
      <h2>T.U.のポートフォリオ</h2>
      <img src={TUPortfolio} />
      <ul>
        <li>このサイト</li>
        <li>React+Firebaseで制作しました。</li>
        <li>
          <Link to="/aboutthispage">詳細については、こちらをご覧ください</Link>
        </li>
        <li>
          <a href="https://github.com/ts-uc/primecounter">
            ソースコードはこちら
          </a>
        </li>
      </ul>
      <hr />
      <h2>toICN</h2>
      <img src={toICN} />
      <ul>
        <li>オープンソースで開発されているブックマークレットです。</li>
        <li>
          既存のコード(chord)掲載サイト（例:
          <a href="https://www.ufret.jp/">U-FRET</a>、
          <a href="https://ja.chordwiki.org/">ChordWiki</a>
          、等）に掲載されているコード譜を、
          <a href="https://instachord.com/">楽器InstaChord</a>
          （誰にでも簡単に演奏できる楽器）向けに変換するブックマークレットの開発に関わりました。
        </li>
        <li>
          設定変更機能、chordに色を付ける機能、奏者のレベルに合わせて表示を変える機能等、toICNの改良に貢献しました。
        </li>
        <li>
          このソフトウェアを開発したことにより、楽器InstaChordの開発者から、楽器InstaChordをプレゼントしていただきました！
        </li>
        <li>
          <a href="https://github.com/ts-uc/toICN/tree/main">
            ソースコードはこちら
          </a>
        </li>
      </ul>
      <hr />
      <h2>React Book</h2>
      <img src={ReactBook} />
      <ul>
        <li>
          Reactアプリを一から作る技術、およびAPIに関する知識と実装方法を身につけるために作成しました。
        </li>
        <li>
          APIは、学習目的に公開されてあるAPIである
          <a href="https://app.swaggerhub.com/apis-docs/Takumaron/TechTrain-RailwayMission/1.0.0#/book/post_books">
            こちら
          </a>
          を使用しています。
        </li>
        <li>
          アプリ作成の練習目的で作成したもののため、CSSは最低限のみとなっています。
        </li>
        <li>
          create-react-appにReactアプリの雛形を作成してもらい、それに React
          Router・axios・Formikを使って作成しました。
        </li>
        <li>
          <a href="https://github.com/ts-uc/react-book">ソースコードはこちら</a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
