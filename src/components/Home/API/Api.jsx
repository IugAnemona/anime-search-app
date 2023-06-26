async function traceMoe(link) {
  const api = await fetch(
    `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(
      // "https://3.bp.blogspot.com/-v572Vua3feE/Vk0-9ZIr5hI/AAAAAAAAKaw/b0kjgmDmS6Y/s1600/Captura%2Bde%2Btela%2Bde%2B2015-11-19%2B01-15-35.png"
      link
    )}`
  ).then((e) => e.json());
  console.log(api);
  const jikanData = await fetch(
    `https://api.jikan.moe/v4/anime?q=${api.result[0].anilist.title.romaji}&sfw`
  ).then((e) => e.json());

  const apiData = {
    title: jikanData.data[0].title,
    image: jikanData.data[0].images.jpg.large_image_url,
    studio: jikanData.data[0].studios[0].name,
    url: jikanData.data[0].url,
    score: jikanData.data[0].score,
    genres: jikanData.data[0].genres.map((x) => x.name),
    episodes: jikanData.data[0].episodes,
    synopsis: jikanData.data[0].synopsis,
    video: `${api.result[0].video}&size=l`,
    episode: api.result[0].episode,
  };

  return apiData;
}

export default traceMoe;
