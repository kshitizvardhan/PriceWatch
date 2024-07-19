"use client"
import React, { useState } from 'react'
import { PlaceholdersAndVanishInput } from './ui/Input'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/Components/ui/alert-dialog"
import { scrapeAndStoreProduct, checkAuth } from '@/lib/actions'
import { auth } from "@clerk/nextjs/server";


export const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    // Check if hostName contains amazon.com or amazon.ca followed by country code.
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true
    }
  } catch (error) {
    return false
  }
  return false
}

export const isValidMyntraProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    // Check if hostName contains amazon.com or amazon.ca followed by country code.
    if (
      hostname.includes("myntra.com") ||
      hostname.includes("myntra.") ||
      hostname.endsWith("myntra")
    ) {
      return true
    }
  } catch (error) {
    return false
  }
  return false
}

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const placeholders = [
    "Your Discount Awaits! Enter Product Link...",
    "Paste the secret URL for sweet savings...",
    "Provide the product link and unlock discounts...",
    "Paste the cursed URL for a deal too good to be true...",
  ]


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPrompt(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // this stops the page to reload on clicking submit.

    await checkAuth(); // if not login then, redirect to sign-in/signup
    
    const isValidLink = isValidAmazonProductURL(searchPrompt) || isValidMyntraProductURL(searchPrompt);

    if (!isValidLink) {
      setIsDialogOpen(true)
    } else {
      // handle valid URL case
      try {
        setIsLoading(true)

        // scrape the product page
        const product = await scrapeAndStoreProduct(searchPrompt)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Invalid URL</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            The URL you entered is not a valid Amazon product URL. Please check and try again.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default SearchBar
