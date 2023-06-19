import P from "prop-types";

const AnimeCard = ({
  title,
  image,
  score,
  episodes,
  genres,
  studio,
  synopsis,
}) => {
  return (
    <section className="w-full p-1 mx-auto rounded-xl  my-4 bg-slate-100 border-2 border-slate-200 justify-center shadow-md max-w-3xl">
      <h1 className="font-bold px-2">{title}</h1>
      <div className="flex shadow-xl">
        <img className="w-2/4 max-w-[300px]" src={image} alt="" />
        <div className="flex-1 px-1 flex flex-col justify-between sm:justify-center sm:relative">
          <div className="sm:absolute sm:top-0 sm:right-0">
            <ul>
              <li className="text-center p-3 font-bold">
                <span className=" bg-green-500 rounded-lg text-3xl sm:text-5xl p-2">
                  {score}
                </span>
              </li>
            </ul>
          </div>
          <ul>
            <li className="border-y md:border-t-0 border-slate-300 py-2">
              Episodes: <span>{episodes}</span>
            </li>
            <ul className="flex flex-wrap border-b border-slate-300 py-2">
              <span className="mr-2">Genres:</span>
              {genres.map(
                (genres, i, a) =>
                  i !== a.length - 1 ? (
                    <li key={i} className="mr-1">
                      {genres},
                    </li>
                  ) : (
                    <li key={i} className="mr-1">
                      {genres}.
                    </li>
                  )
                // <li className="mr-1">{genres},</li>
              )}
              {/* <li className=" mr-1">Comedy</li>
              <li className="mr-1">Mystery</li>
              <li className="mr-1">Romance</li>
            <li className="mr-1">Supernatural</li> */}
            </ul>
            <li className="mr-2 py-2 md:border-b md:border-slate-300">
              Studio: <span>{studio}</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className=" p-3">
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <h2 className="font-bold text-2xl my-4">Sinopse:</h2>
            <p className="md:py-10 md:px-2 ">{synopsis}</p>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

AnimeCard.propTypes = {
  title: P.string.isRequired,
  image: P.string.isRequired,
  score: P.number.isRequired,
  genres: P.array.isRequired,
  studio: P.string.isRequired,
  synopsis: P.string.isRequired,
  episodes: P.number.isRequired,
};

export default AnimeCard;
