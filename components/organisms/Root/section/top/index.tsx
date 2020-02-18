import React from "react";
import styled from "@emotion/styled";
import { darkColor, spacing, fontSize } from "../../../../../constrants/style";
import Container from "../../../../atoms/Container";
import { H2, H3 } from "../../../../atoms/Heading";
import Paragraph from "../../../../atoms/Paragraph";

const Wrapper = styled.div({
  padding: 40,
  paddingTop: 120,
  position: "relative",
  "&:before": {
    content: "close-quote",
    position: "absolute",
    top: -8,
    left: 0,
    width: 1200,
    height: "20vh",
    maxHeight: 180,
    minHeight: 70,
    backgroundColor: darkColor,
    transform: "rotate(-15deg)",
    transformOrigin: "left bottom"
  }
});

const Img = styled.img({
  marginTop: spacing.M,
  width: 300,
  borderRadius: 4
});

const History = styled.div({
  fontSize: fontSize.S,
  marginTop: spacing.S
});

const Job = styled.div({
  display: "flex",
  alignItems: "center"
});

const Term = styled.span({
  //fontSize: fontSize.XS,
  textAlign: "right",
  marginRight: spacing.XS
});

const ProfParagraph = styled(Paragraph)({
  marginTop: spacing.S,
  textAlign: "center"
});

interface JobHistory {
  term: string;
  company: string;
}

const history: JobHistory[] = [
  { term: "2019/12 -", company: "JX Press" },
  { term: "2019/07 - 2019/11", company: "LocalWorks Inc." },
  { term: "2018/07 - 2019/06", company: "Xenoma Inc." }
];

const TopSection: React.FC = () => {
  return (
    <Wrapper id={"profile"}>
      <Container>
        <H2>Profile</H2>
        <Img src={"/static/img/profile.jpg"} alt={"my pic"} />
        <H3 style={{ marginTop: spacing.S }}>Kohki Noguchi / codyNog</H3>
        <ProfParagraph>
          フロントエンドエンジニア。
          <br />
          Reactベースのフレームワークを使ったWebサービスの開発を行っている。
        </ProfParagraph>
        <ProfParagraph>
          個人ではPWAやクロスプラットフォームのスマホアプリ、WebサイトのUXデザインなどを受託している。
        </ProfParagraph>
        <H3 style={{ marginTop: spacing.S }}>Job History</H3>
        <History>
          {history.map((elem, i) => {
            return (
              <Job
                key={elem.term}
                style={i === 0 ? {} : { marginTop: spacing.XS }}
              >
                <Term>{elem.term}</Term>
                {elem.company}
              </Job>
            );
          })}
        </History>
      </Container>
    </Wrapper>
  );
};

export default TopSection;
