import Image from 'next/image'

export default Image = ({path, height, width, name}) => (
  <Image
    src={path}
    height={height}
    width={width}
    alt={name}
  />
)