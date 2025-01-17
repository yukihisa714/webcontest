import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { SectionTitle } from "../../components/SectionTitle";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";

export const C2S3 = () => {
  return (
    <Main>
      <SectionTitle>第三節　悪用される仮想通貨</SectionTitle>
      <MiniSectionTitle>マネーロンダリング</MiniSectionTitle>
      <MiniSectionTitle>投資詐欺</MiniSectionTitle>
      <Balloon direction="left">先生、ノード先生、大変です！</Balloon>
      <Balloon direction="right">どうした？</Balloon>
      <Balloon direction="left">
        サギ男さんって人、たったの一週間で＊億り人になったらしいですよ！この人のトレードのテクニック、一万円で教えてくれるらしいですよ！こんなの申し込むしかないですよね？！申し込みます。
      </Balloon>
      <Balloon direction="right">
        おい、まてい。その人が億稼いだ保証はあるのか？
      </Balloon>
      <Balloon direction="left">これ見てくださいよ、ほら。</Balloon>
      <Balloon direction="right">
        これ・・・。ブラウザの開発者向け機能を使って、数字を書き換えてるだけだぞ。
      </Balloon>
      <Balloon direction="left">え？</Balloon>
      <p>
        近年、仮想通貨にまつわる投資詐欺が増加しています。（正しいソースを持ってくる）
        <br />
        投資の成果を偽ったりして、セミナー料を騙し取るなど・・・
        <br />
        また、価格変動率が高いため、価格の予想は非常に困難です。仮に、その人が成功していたとしても、あなたが成功する補償はありません。仮想通貨に限らず、投資の勧誘には慎重になりましょう
        ＊億り人：株式投資や暗号資産取引（仮想通貨取引）などで億単位の資産を築いた投資家のこと。2008年公開の映画『おくりびと』のタイトルをもじった造語。
        Nomura.co.jp/terms/japan/o/A03207.html
      </p>
      {/* <MiniSectionTitle></MiniSectionTitle> */}
      <MiniSectionTitle>仮想通貨自体が詐欺紛い</MiniSectionTitle>
      <p>
        仮想通貨そのものの仕組み自体は、改竄耐性が高く、信用に足るものですが、開発陣に悪意がある場合があります。
        例えば、ネットワーク上に公開される前にマイニングをしたりプリマイニング（言葉があっているかは事前に調べておく）
        ・・・
        仮想通貨を購入する前に、ホワイトペーパーを熟読したり、事前にネットでリサーチすることが肝要です。
      </p>
      <Pager
        direction="back"
        text="第二節"
        link="/content.html?chapter=2&section=2"
      />
      <Pager
        direction="forward"
        text="第三章"
        link="/content.html?chapter=3&section=0"
      />
    </Main>
  );
};
