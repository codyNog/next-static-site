import React from "react";
import styled from "@emotion/styled";
import { darkColor, spacing } from "../../../../../constrants/style";
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
    top: 0,
    left: 0,
    width: 1200,
    height: 180,
    backgroundColor: darkColor,
    transform: "rotate(-15deg)",
    transformOrigin: "left bottom"
  }
});

const Img = styled.img({
  marginTop: spacing.M,
  maxWidth: 300,
  minWidth: 200,
  minHeight: 200,
  borderRadius: 4
});

const History = styled.div({
  marginTop: spacing.S
});

const Job = styled.div({
  display: "flex"
});

const Term = styled.span({
  width: 160,
  textAlign: "right",
  marginRight: spacing.XS
});

interface JobHistory {
  term: string;
  company: string;
}

const history: JobHistory[] = [
  { term: "2019/12", company: "JX Press" },
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
        <Paragraph style={{ marginTop: spacing.S, width: 300 }}>
          フロントエンドエンジニア。ReactとTypeScriptでやっていきたい。
        </Paragraph>
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
