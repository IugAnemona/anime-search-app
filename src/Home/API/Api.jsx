async function traceMoe(link) {
  const api = await fetch(
    `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(
      // "https://3.bp.blogspot.com/-v572Vua3feE/Vk0-9ZIr5hI/AAAAAAAAKaw/b0kjgmDmS6Y/s1600/Captura%2Bde%2Btela%2Bde%2B2015-11-19%2B01-15-35.png"
      link
    )}`
  ).then((e) => e.json());

  return api;
}

export default traceMoe;
