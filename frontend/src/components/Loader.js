import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <CircularProgress size={100} />
    </div>
  );
}
