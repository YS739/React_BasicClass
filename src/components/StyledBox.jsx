//  style을 사용 할 수 있게 import
import styled from "styled-components";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid ${(props) => props.borderColor};
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// 박스의 색을 배열에 담습니다.
const boxList = ["red", "purple", "green"];

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "purple":
      return "보라 박스";
    case "green":
      return "초록 박스";
    default:
      return "검정 박스";
  }
};

const StyledBox = () => {
  return (
    <div>
      <hr />
      <div style={{ width: "600px", display: "flex" }}>
        {boxList.map((box) => (
          <StBox borderColor={box} key={box}>
            {getBoxName(box)}
          </StBox>
        ))}

        {/* map 시도..ㅎ */}
        {/* <StBox getBoxName= boxList.map((color)=>{
        color[i]

      }></StBox> */}
      </div>
      <hr />
    </div>
  );
};

export default StyledBox;
