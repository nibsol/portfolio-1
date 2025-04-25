import Image from "next/image";
import ImageWithText from "./ImageWithText";


function ImageGrid({ image1, image2, image3, image4, image5 }) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 lg:col-span-1">
          <ImageWithText
            src={image1}
            alt="Purple geometric light"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-[37px]"
            quality={100}
          />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <ImageWithText
            src={image2}
            alt="Artistic portrait"
            width={1000}
            height={700}
            className="w-full h-full object-cover rounded-[37px]"

          />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <ImageWithText
            src={image3}
            alt="Echo text with geometric pattern"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-[37px]"
          />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <ImageWithText
            src={image4}
            alt="Holographic heads"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-[37px]"
          />
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <ImageWithText
            src={image5}
            alt="Pop art on device screen"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-[37px]"
          />
        </div>
      </div>
    </div>
  );
}


export default ImageGrid