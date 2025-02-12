import React from "react";
import { useMediaQuery } from "react-responsive";
import { AllPostHeader, ForYou } from "../../index";
import { AllPostContainer } from "../../index";

function AllPost() {
  const screenStatus = useMediaQuery({ query: "(max-width:625px)" });
  return (
    <AllPostContainer>
      <AllPostHeader screenStatus={screenStatus} />
      <main className="pt-[3rem]">
        <ForYou />
      </main>
    </AllPostContainer>
  );
}

export default AllPost;
