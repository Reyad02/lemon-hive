"use server";

export const getAllLocations = async () => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
