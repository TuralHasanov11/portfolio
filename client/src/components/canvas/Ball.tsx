import { Image } from "../../models/global.model";
import { imageUrl } from "../../utils/image_url";

export default function BallCanvas({ icon }: { icon: Image }) {
  return (
    <div className="flex flex-wrap justify-center p-2">
      <div className="w-full">
        <img src={imageUrl(icon).url()} alt={icon._id} className="shadow max-w-full h-auto align-middle border-none" />
      </div>
    </div>
  );
}
