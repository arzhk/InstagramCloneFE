import React, { useState } from "react";
import { connect } from "react-redux";
import { theme } from "../../Assets/theme";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SpriteSheet from "../../Assets/spritesheet.png";
import SpriteSheet2 from "../../Assets/spritesheet_2.png";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) => dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
});

const users = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const Stories = (props) => {
  const [spacerSize, setSpacerSize] = useState(0);

  const scrollHandler = (event) => {
    switch (event.target.id) {
      case "arrow-left":
        if (spacerSize < 0) setSpacerSize(spacerSize + 145);
        break;
      default:
        if (spacerSize > -580) setSpacerSize(spacerSize - 145);
        break;
    }
  };

  return (
    <StoriesMainWrapper>
      <StoriesMainContainer>
        <Spacer spacerSize={spacerSize} />
        {spacerSize !== 0 && <div id="arrow-left" className="arrow-button-left" onClick={scrollHandler} />}
        {users.map((user) => (
          <Story>
            <div></div>
            <div className="story-outline"></div>
            <div>Usernadasdsadasdsme</div>
          </Story>
        ))}
        {spacerSize !== -580 && <div id="arrow-right" className="arrow-button-right" onClick={scrollHandler} />}
      </StoriesMainContainer>
    </StoriesMainWrapper>
  );
};

const StoriesMainWrapper = styled.div`
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: white;
  border-radius: 3px;
  padding: 16px 0;
  overflow-y: hidden;
  overflow-x: auto;
  margin: 0 auto 24px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const StoriesMainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > .arrow-button-left,
  .arrow-button-right {
    background-image: url(${SpriteSheet2});
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    z-index: 99;
    position: absolute;
    cursor: pointer;
  }

  > .arrow-button-left {
    background-position: -295px -227px;
    left: 0px;
  }
  > .arrow-button-right {
    background-position: -298px -274px;
    right: 0px;
  }
`;

const Spacer = styled.div`
  transition: margin 0.25s ease;
  ${({ spacerSize }) => `margin-right: ${spacerSize}px`};
`;

const Story = styled.div`
  margin: 0 12px;
  position: relative;
  text-align: center;
  cursor: pointer;
  > div:first-child {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background-color: black;
    margin: 0 auto;
  }
  div:last-child {
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 74px;
    display: block;
    overflow: hidden;
    margin-top: 8px;
    font-size: 12px;
    line-height: 14px;
  }
  .story-outline {
    background-image: url(${SpriteSheet});
    background-repeat: no-repeat;
    background-position: -306px -66px;
    height: 66px;
    width: 66px;
    position: absolute;
    top: -4px;
    left: 5px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Stories);