import styled from "styled-components"
import Meta from '../components/common/Meta'
import Image from 'next/image'

const MainVisual = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`

const Home = () => {
  return (
    <>
      <Meta title="トップページ" description="トップページの説明" />

      <MainVisual>
        <Image src="/images/mv.jpg" alt="" layout="fill" objectFit="cover" />
      </MainVisual>
      <div>メニュー</div>
      <div>テイクアウト</div>
      <div>アバウト</div>
      <div>おすすめ</div>
      <div>店内の様子</div>
      <div>アクセス</div>
    </>
  )
}

export default Home;