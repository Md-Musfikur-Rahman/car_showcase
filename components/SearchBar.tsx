"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
      <Image
        src="/magnifying-glass.svg"
        alt="search icon"
        width={40}
        height={40}
        className=" object-contain"
      />
    </button>
  );
};

const SearchBar = ({ setManufacturer, setModel }: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchmodel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchmodel === "") {
      return alert("Please fill the search bar");
    }

    setModel(searchmodel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className=" searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />

        <input
          type="text"
          name="model"
          value={searchmodel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className=" searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
