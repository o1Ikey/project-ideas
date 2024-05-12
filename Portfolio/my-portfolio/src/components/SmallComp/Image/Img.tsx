export default function Img(props: {
  src: string;
  alt: string;
  className: string;
}) {
  return <img src={props.src} alt={props.alt} className={props.className} />;
}
