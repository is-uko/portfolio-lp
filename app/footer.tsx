export function Footer() {
  return (
    <div className="w-11/12 lg:max-w-[860px] mx-auto pt-10 pb-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 pb-10">
        <div>
          <h2 className="font-bold pb-2">コース一覧</h2>
          <ul className="pl-3">
            <li>スタンダードプラン</li>
            <li>プレミアムプラン</li>
            <li>短期集中プラン</li>
            <li>日常英会話コース</li>
            <li>ビジネス英会話コース</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pb-2">講師紹介</h2>
          <ul className="pl-3">
            <li>講師について</li>
            <li>講師一覧</li>
            <li>講師を探す</li>
          </ul>
        </div>
        <div>
            <h2 className="font-bold pb-2">会社情報</h2>
            <ul className="pl-3">
                <li>会社情報</li>
                <li>採用情報</li>
            </ul>
        </div>
        <div>
            <h2 className="font-bold pb-2">BBBについて</h2>
            <ul className="pl-3">
                <li>よくあるご質問</li>
                <li>ご利用規約</li>
                <li>プライバシーポリシー</li>
                <li>お問い合わせ</li>
            </ul>
        </div>
      </div>
      <p className="text-sm text-center">&copy; BBB English School</p>
    </div>
  );
}
