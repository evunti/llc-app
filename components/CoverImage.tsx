import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
// Update the import path below if your sanityClient file is located elsewhere

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanityClient"; // Adjust path as needed

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder
    .image(source)
    .width(1200) // default width, adjust as needed
    .quality(90)
    .auto("format")
    .url();
}

interface CoverImageProps {
  image: SanityImageSource;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export default function CoverImage({
  image,
  alt = "",
  className = "",
  priority = false,
}: CoverImageProps) {
  if (!image) return null;
  const imageUrl = urlFor(image);
  return (
    <div
      className={`relative w-full h-28 sm:h-40 md:h-56 lg:h-80 overflow-hidden ${className}`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority={priority}
        sizes="100vw"
      />
    </div>
  );
}
