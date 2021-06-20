import InterviewList from "./InterviewList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: interviews,
    isPending,
    error,
  } = useFetch("http://localhost:3000/v1/interviews");

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
