"use client"
import React from 'react'
import { PlaceholdersAndVanishInput } from './ui/Input'

const SearchBar = () => {
    const placeholders = [
        "Your Discount Awaits! Enter Product Link...",
        "Paste the secret URL for sweet savings...",
        "Provide the product link and unlock discounts...",
        "Paste the cursed URL for a deal too good to be true...",
      ];
     
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };
    const handleSubmit = () => {

    }
  return (
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
        />
  
  )
}

export default SearchBar