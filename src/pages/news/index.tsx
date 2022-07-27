import Link from 'next/link'
import styled from "styled-components"
import { client } from "../../../libs/client"

const Wrapper = styled.div`
  background: #ff0000;
`

const News = ({ newsList }) => {
  return (
    <Wrapper>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>
              <a>{news.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      newsList: data.contents,
    },
  };
};

export default News;