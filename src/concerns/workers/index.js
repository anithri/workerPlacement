import defaultWorkers from "./Defaults";

export default function app(workers = defaultWorkers, action) {
  return workers;
}
