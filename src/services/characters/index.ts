"use server";

export const getAllCharacter = async () => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
export const getSingleCharacter = async (id:number) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
