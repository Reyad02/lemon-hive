"use client";
import { useEffect, useState } from "react";

export default function EpisodeNames({ id }: { id: number }) {
  const [episodeNames, setEpisodeNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchEpisodes = async (id: number) => {
      const characterRes = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = await characterRes.json();

      const episodeUrls: string[] = character.episode;
      const episodeIds = episodeUrls
        .map((url) => url.split("/").pop())
        .join(",");

      const episodesRes = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds}`
      );
      const episodes = await episodesRes.json();

      const names = Array.isArray(episodes)
        ? episodes.map((ep) => ep.name)
        : [episodes.name];

      setEpisodeNames(names);
    };

    fetchEpisodes(id);
  }, [id]);

  return (
    <div className="ml-1">
      <ul className="list-disc list-inside">
        {episodeNames.map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
