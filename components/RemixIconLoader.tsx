"use client";

import { useEffect } from "react";

const REMIX_ICON_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css";

export default function RemixIconLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = REMIX_ICON_URL;
    link.crossOrigin = "anonymous";
    link.media = "print";
    link.onload = () => {
      link.media = "all";
    };
    document.head.appendChild(link);
    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);
  return null;
}
