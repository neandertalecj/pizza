
import React, { useEffect } from "react"

export default function Scroll() {

  useEffect(function mount() {

    function onScroll() {
      const scroll = window.scrollY
      if (scroll > 50) {
        console.log("scroll!",  window.scrollY)

      }
    }

    window.addEventListener("scroll", onScroll)

    return function unMount() {
      window.removeEventListener("scroll", onScroll)
    }

  })

  return null
}