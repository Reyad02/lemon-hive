"use server";

export const getAllEpisodes = async () => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
