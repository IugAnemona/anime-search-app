import { useEffect, useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import traceMoe from "../API/Api";
import AnimeCard from "../AnimeCard/AnimeCard";

function Main() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestApi(
      "https://api.duniagames.co.id/api/content/upload/file/2675731411632395146.jpeg"
    );
  }, []);

  let link = "";
  // "https://api.duniagames.co.id/api/content/upload/file/2675731411632395146.jpeg";

  async function requestApi(link) {
    const resultApi = await traceMoe(link);

    setApiData(resultApi);
    setLoading(false);
  }

  return (
    <main className="flex w-full my-10">
      <div className="mx-auto h-full w-full my-4 rounded">
        <div className="p-2 bg-primary-color rounded flex justify-between items-center">
          <div className="flex-1">
            <input
              onChange={(e) => (link = `${e.target.value}`)}
              placeholder="Image URL"
              name="imgURL"
              className="p-2 border-2 outline-0 border-border w-2/3 max-w-xl min-w-[200px] rounded-md text-base focus:border-focus focus:shadow-sm text-text"
            />
          </div>
          <div
            className="text-color-white text-3xl mx-10 cursor-pointer p-1 hover:scale-110 duration-300"
            onClick={() => requestApi(link)}
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass "></i>
          </div>
        </div>

        <div className="flex mt-5 p-2 md:h-auto 2xl:p-2 bg-primary-color rounded-2xl flex-wrap md:justify-between md:items-start lg:h-auto">
          {loading ? (
            <h1 className="text-white mx-auto text-8xl animate-spin">
              <ImSpinner11 />
            </h1>
          ) : (
            <div className="flex-1 flex flex-wrap ">
              <div className="my-5 flex-1 md:mx-5">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full rounded mx-auto lg:w-full border-4 border-color-white  md:min-w-[20rem]"
                  src={apiData.video}
                ></video>
                <div className="bg-slate-200 m-5 py-6 text-center font-bold text-3xl">
                  <h2>episode: {apiData.episode}</h2>
                </div>
              </div>
              <div className="lg:w-2/4 mx-auto">
                <AnimeCard
                  title={apiData.title}
                  image={apiData.image}
                  studio={apiData.studio}
                  url={apiData.url}
                  score={apiData.score}
                  genres={apiData.genres}
                  episodes={apiData.episodes}
                  synopsis={apiData.synopsis}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
