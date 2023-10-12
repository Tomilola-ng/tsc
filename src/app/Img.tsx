import Image from "next/image";

const Img = ({ pay_load }: any) => {
  const { img_src, img_alt, width, height } = pay_load || {};
  return <Image src={img_src} alt={img_alt} width={width} height={height} />;
};

export default Img;
