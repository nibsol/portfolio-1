import ImageWithText from "./ImageWithText";

function ImageGridOne({ topImage, bottomLeftImage, bottomRightImage }) {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="rounded-xl">
        <ImageWithText width={0} height={0} {...topImage} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ImageWithText width={0} height={0} {...bottomLeftImage} />
        </div>
        <div>
          <ImageWithText width={0} height={0} {...bottomRightImage} />
        </div>
      </div>
    </div>
  )
}

export default ImageGridOne