import Head from "next/head";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f4f4f4;
`;

const Logo = styled.div`
  font-size: 2em;
`;

const Label = styled.span`
  font-size: 1em;
  font-family: monospace;
`;

const Divider = styled.div`
  border-top: var(--border-color) 1px solid;
  margin: 0.6em 0;
`;

const Content = styled.div`
  display: flex;
  border: var(--border-color) 1px solid;
  flex-direction: column;
  padding: 2em;
`;

export default function Home() {
  return (
    <Section>
      <Head>
        <title>Oregon Girl Creations</title>
        <meta name="description" content="Coming soon" />
        <link rel="icon" href="/ogc-logo.svg" />
      </Head>
      <Content>
        <Logo>🌲👧🌈</Logo>
        <Divider />
        <Label>Coming soon...</Label>
      </Content>
    </Section>
  );
}
