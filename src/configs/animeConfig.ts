import { API_URL } from "astro:env/server";

interface AnimeConfig {
  wajiknime: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  wajikAnimeApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: AnimeConfig = {
  wajiknime: {
    siteName: "AnimeIT",
    description: "Nonton anime gratis ga pake karcis hanya di AnimeIT Indonesia",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/wajiknime.jpg",
  },

  wajikAnimeApi: {
    apiUrl: API_URL,
    baseUrlPath: "/samehadaku",
  },
};

export default animeConfig;
