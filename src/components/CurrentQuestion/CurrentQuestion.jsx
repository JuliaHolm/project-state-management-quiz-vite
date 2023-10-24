import useQuizStore from "../../stores/useQuizStore";
import "./CurrentQuestion.css";

export const CurrentQuestion = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const question = questions[currentQuestionIndex];

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div className="question-container">
      <h1>"{question.questionText}"</h1>
    </div>
  );
};
