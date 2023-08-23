export default function CoWorker(props) {
  // console.log(props.info);
  const picSRC = "./pictures/" + props.info.image;
  return (
    <div className="coworker-item">
      <img src={picSRC} alt="Co-Workers" />
    </div>
  );
}
