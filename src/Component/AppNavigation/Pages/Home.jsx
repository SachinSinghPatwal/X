import { NavContainer, ComposePost, HomePageRightContent } from "../../index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const status = useSelector((state) => state.auth.composePostVisibility);
  return (
    <>
      <div
        className={` grid lg:grid-cols-[14vw_60vw_auto] 
        grid-cols-[13vw_80vw_auto] xl:justify-center items-start
        `}
      >
        <aside className="h-full">
          <NavContainer />
        </aside>
        <main
          className="grid sm:grid-cols-[80vw_0px] h-screen md:grid-cols-[600px_0px] 
      lg:grid-cols-[600px_auto] "
        >
          {status ? (
            <div
              className="fixed z-[1000] lg:left-[13vw] xl:left-[28.2vw] 
              md:left-[13vw] sm:left-[12vw] 
            left-[9.8vw]"
            >
              <ComposePost />
            </div>
          ) : null}
          <Outlet />
          <HomePageRightContent />
        </main>
      </div>
    </>
  );
}

export default Home;
