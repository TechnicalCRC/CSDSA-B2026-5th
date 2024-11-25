import ItemMovie from "./ItemMovie";

export default function MovieData(props) {
  let count = 0;
  let ar = [1, 2, 3, 4, 5];
  return props.masterData.map((Mobj) => (
    <ItemMovie key={Mobj.MovieId} MovieObj={Mobj}></ItemMovie>
  ));
}
