import Image from 'next/image'

export default ImageComp = ({path, height, width, name}) => (
  <Image
    src={path}
    height={height}
    width={width}
    alt={name}
  />
)