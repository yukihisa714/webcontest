import React from "react";
import { Main } from "../../components/Main";
import { Pager } from "../../components/Pager";
import { Separator } from "../../components/Separator";
import { SectionTitle } from "../../components/SectionTitle";

export const C1S1 = () => {
  return (
    <>
      <Main>
        <SectionTitle>一節　ブロックチェーンの概要</SectionTitle>
        <Separator />
        <ul>
          <li>ブロックチェーンの定義を一言でまとめる</li>
          <li>
            「ブロックチェーンにはさまざまな種類があるが、あえて言うなら」と前置きを入れる
          </li>
          <li>
            過去に行われたすべての取引データが、ブロックごとにまとめられて、各ブロックが一本の鎖のようにつながった分散型のデータベースである（言葉を変えないとパクリになる。イラストを使う。）
          </li>
          <li>上のイメージ画像を作成する</li>
          <li>「データベース」、「分散型」について述べる</li>
          <li>
            ＊データベース：情報（データ）を整理し、欲しいデータに簡単にアクセスできるようにした物。
          </li>
        </ul>

        <Pager
          direction="back"
          text="第一節"
          link="/content?chapter=1&section=1"
        />
        <Pager
          direction="forward"
          text="第二節"
          link="/content?chapter=1&section=2"
        />
      </Main>
    </>
  );
};
