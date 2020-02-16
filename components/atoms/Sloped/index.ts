import styled from "@emotion/styled";

interface Props {
  color?: string;
  padding?: string | number;
  backgroundColor?: string;
  transform?: string;
}

const Sloped = styled.div<Props>(props => ({
  color: props.color,
  position: "relative",
  padding: props.padding,
  ":before": {
    content: "close-quote",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: props.backgroundColor,
    transform: props.transform
  },
  ":after": {
    content: "close-quote",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: props.backgroundColor,
    transform: props.transform
  }
}));

export default Sloped;
