"use server";

export const getAllLocations = async (page: number = 1) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
