export const AboutThisPage = () => {
  return (
    <div class="contents_wrap">
      <h1>このページについて</h1>
      <hr />
      <h2>使用した技術について</h2>
      <ul>
        <li>
          フロントエンド技術として、<strong>React</strong>を採用しています。
        </li>
        <li>
          こんなレトロな見た目のWebサイトですが、Reactの新機能である
          <strong>Hook</strong>を積極的に使用してます。
        </li>
        <li>
          ルーティングに<strong>React Router</strong>を使用しています。
        </li>
        <li>
          サーバーレス開発プラットフォーム<strong>Firebase</strong>
          を使用しています。
        </li>
        <li>
          データーベースは、Firebaseの機能である<strong>FireStore</strong>{" "}
          (NoSQL) を使用しています（アクセスカウンターに使用）。
        </li>
        <li>
          <a href="https://github.com/ts-uc/primecounter">
            ページのソースコードはこちら
          </a>
        </li>
      </ul>
      <hr />
      <h2>制作経緯</h2>
      <ul>
        <li>就職活動の一環として、なにか自分の技量を示すものが作りたい</li>
        <li>
          →Firebaseを使えば、無料かつフロントエンドの知識だけでWebサイトが作成できるらしい（データベース機能まである！）
        </li>
        <li>
          →データベース機能を使ってアクセスカウンターを作り、訪問者数番目の素数を表示するサイトを作ろう！
        </li>
        <li>
          →試しに作ったWebサイトをデプロイし、技術者がたくさんいるdiscordサーバーに提示したところ、「もっとレトロな見た目のサイトがいい！」との要望があった
        </li>
        <li>
          →2000年前後を彷彿させるようなデザインでありながら、最新技術を用いて作られたWebサイト完成！
        </li>
      </ul>
      <hr />
      <h2>背景画像について</h2>
      <ul>
        <li>Wikimedia Commonsよりお借りしました</li>
        <li>©2009 Joseph Francis CC-BY 2.0 Generic</li>
      </ul>
      <hr />
      <h2>BGMについて</h2>
      <ul>
        <li>左上のチェックボックスで、BGMのオンオフができます。</li>
        <li><a href="https://freesound.org/people/Jagadamba/sounds/387818/">音源はここよりお借りしました</a></li>
        <li>©2017 Jagadamba CC-BY 3.0 Unported</li>
      </ul>
      <hr />
      <h2>マウスのキラキラエフェクトについて</h2>
      <ul><li><a href="http://www.mf2fm.com/rv/dhtmltinkerbell.php">ここよりお借りし、使用しています。</a></li></ul>
    </div>
  );
};
