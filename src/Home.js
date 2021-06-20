import InterviewList from "./InterviewList";
import useFetch from "./useFetch";
import { baseUrl } from "./config";

const Home = () => {
  const {
    data: interviews,
    isPending,
    error,
  } = useFetch(`${baseUrl}/v1/interviews`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {interviews && (
        <InterviewList interviews={interviews} title={"Upcoming Interviews"} />
      )}
    </div>
  );
};

export default Home;
