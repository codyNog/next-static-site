import styled from "@emotion/styled";
import { fontSize } from "../../../constrants/style";

const H1 = styled.h1({});

const H2 = styled.h2({
  fontSize: fontSize.L,
  letterSpacing: 1
});

const H3 = styled.h3({
  fontSize: fontSize.M
});

export { H1, H2, H3 };
