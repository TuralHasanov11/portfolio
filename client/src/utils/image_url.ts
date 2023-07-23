import backendClient from "../clients";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "../models/global.model";

const builder = imageUrlBuilder(backendClient);

export function imageUrl(image: Image) {
  return builder.image(image);
}