import { useState } from "react";
import traceMoe from "../API/Api";

function Main() {
  const [anilist, setAnilist] = useState("");
  const [trace, setTrace] = useState("");

  const [hasAnilist, hasTrace] = [anilist, trace];
  let link = "";
  // "https://api.duniagames.co.id/api/content/upload/file/2675731411632395146.jpeg";

  async function requestApi(link) {
    const resultApi = await traceMoe(link);
    const traceData = [
      resultApi.result[0].image,
      resultApi.result[0].video,
      resultApi.result[0].episode,
    ];
    const anilistData = [
      resultApi.result[0].anilist.title.romaji,
      `https://anilist.co/anime/${resultApi.result[0].anilist.id}`,
    ];
    setAnilist(anilistData);
    setTrace(traceData);
  }

  //   const setDados = () => {

  //   };

  return (
    <main className="flex w-full h-5/6 my-10">
      <div className="container mx-auto h-full my-4 rounded">
        <div className="p-2 bg-primary-color rounded flex justify-between items-center">
          <div className="">
            <input
              onChange={(e) => (link = `${e.target.value}`)}
              placeholder="Image URL"
              name="imgURL"
              className="p-2 border-2 outline-0 border-border rounded-md text-base focus:border-focus focus:shadow-sm text-text"
            />
          </div>
          <div
            className="text-color-white text-3xl mx-10 cursor-pointer p-1 hover:scale-110 duration-300"
            onClick={() => requestApi(link)}
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass "></i>
          </div>
        </div>
        {hasAnilist && hasTrace ? (
          <div className="flex mt-5 p-2 md:p-0 h-5/6 md:h-auto 2xl:p-2 bg-primary-color rounded-2xl flex-wrap md:items-center lg:h-auto">
            <div className="w-full my-5 md:mx-2 md:w-6/12 lg:w-3/6 2xl:w-5/12 2xl:my-0">
              <video
                autoPlay
                muted
                loop
                className="w-full rounded mx-auto lg:w-full border-4 border-color-white"
                src={trace[1]}
              ></video>
            </div>
            <div className="w-auto mx-auto p-4 md:flex-1 md:mx-2 bg-color-white rounded-lg opacity-50 text-primary-color md:h-auto">
              <div className="flex justify-center  ">
                <h2 className=" text-3xl sm:text-4xl md:text-4xl">
                  {anilist[0]}
                </h2>
              </div>

              <div className="m-5 md:ml-0 flex flex-wrap justify-center md:justify-start">
                <ul className="text-start text-2xl md:3xl">
                  <li className="my-2">
                    <p className=" ">Episode: {trace[2]}</p>
                  </li>
                  <li className="my-2">
                    <a href={anilist[1]} target="_blank" rel="noreferrer">
                      Anilist Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default Main;
