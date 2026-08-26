"use client"

import { useEffect } from "react"

function CleanReviewUrl() {
  useEffect(() => {
    const url = new URL(window.location.href)

    if (url.searchParams.get("view") !== "all") return

    url.searchParams.delete("view")
    const cleanUrl = `${url.pathname}${url.search}${url.hash}`
    window.history.replaceState(null, "", cleanUrl)
  }, [])

  return null
}

export { CleanReviewUrl }

