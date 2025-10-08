import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
// Update the import path below if your sanityClient file is located elsewhere
import { client } from "../../sanityClient"; // Adjust path as needed

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder
    .image(source)
    .width(1200) // default width, adjust as needed
    .quality(90)
    .auto("format")
    .url();
}

interface CoverImageProps {
  image: any; // Replace 'any' with a more specific type if available
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
      className={`relative w-full h-64 md:h-96 overflow-hidden ${className}`}
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
