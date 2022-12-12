import React, { useEffect, useState } from "react";

const InfinityRendering = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("hello useEffect");
  }, []);
  //  component가 렌더링 될 때 한 번만 사용하고 싶으면 의존성 배열을 '[]' 빈 상태로 두기

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default InfinityRendering;
