export const Profile = () => {
  return (
    <div className="contents_wrap">
      <h1>プロフィール</h1>
      <hr />
      <h2>自己紹介</h2>
      <table>
        <tr>
          <th>名前</th>
          <td>T.U.</td>
        </tr>
        <tr>
          <th>年齢</th>
          <td>24歳</td>
        </tr>
        <tr>
          <th>性別</th>
          <td>男</td>
        </tr>
        <tr>
          <th>出身地</th>
          <td>北海道札幌市</td>
        </tr>
        <tr>
          <th>居住地</th>
          <td>北海道札幌市→青森県弘前市→北海道札幌市</td>
        </tr>
        <tr>
          <th>資格</th>
          <td>
            普通自動車第一種運転免許
            <br />
            実用英語技能検定2級
            <br />
            第3級アマチュア無線技士
          </td>
        </tr>
        <tr>
          <th>趣味</th>
          <td>
            バイク、鉄道旅行、写真
            <br />
            バイクであちこち移動するのが大好きです。
            <br />
            青森に住んでいた頃は、原付バイク(50cc)で北東北あちこち移動し、温泉めぐりや、道の駅スタンプ集めをしていました（青森県内の道の駅はぜんぶ訪問済み）
          </td>
        </tr>
        <tr>
          <th>好きな漫画</th>
          <td>
            恋する小惑星、紡ぐ乙女と大正の月、まちカドまぞく、少女終末旅行、日常
          </td>
        </tr>
      </table>
      <hr />
      <h2>技術関係</h2>
      <table>
        <tr>
          <th>扱える言語</th>
          <td>Javascript, C++, Python</td>
        </tr>
        <tr>
          <th>身につけている主な技術</th>
          <td>React.js</td>
        </tr>
        <tr>
          <th>現在学習中の技術</th>
          <td>Ruby on Rails</td>
        </tr>
        <tr>
          <th>主に使うOS</th>
          <td>
            GNU/Linux (デスクトップGNU/Linuxを10年ほど常用しています！）
            <br />
            現在使用中のディストリビューションは manjaro です
          </td>
        </tr>
        <tr>
          <th>好きなエディタ</th>
          <td>
            Visual Studio Code（ほぼメイン）, neovim（ターミナル環境で使用）
          </td>
        </tr>
        <tr>
          <th>好きなブラウザ</th>
          <td>Firefox（ツリー型タブが手放せないんですよ）</td>
        </tr>
      </table>
    </div>
  );
};
