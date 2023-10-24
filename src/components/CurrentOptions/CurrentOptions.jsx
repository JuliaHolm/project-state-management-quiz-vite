import useQuizStore from "../../stores/useQuizStore";
import "./CurrentOptions.css";

export const CurrentOptions = () => {
  // Retrieve the questions and current question index from the store.
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  // Get the current question and its available options
  const question = questions[currentQuestionIndex];
  const options = question.options;

  // Retrieve the selected answer index, whether it's correct, and the action to submit answers from the store
  const selectedAnswerIndex = useQuizStore(
    (state) => state.answers[currentQuestionIndex]?.answerIndex
  );
  const isAnswerCorrect = useQuizStore(
    (state) => state.answers[currentQuestionIndex]?.isCorrect
  );

  // Handle the click event when an option is selected
  const handleOptionClick = (index) => {
    // Check if an answer is already submitted for the current question
    if (selectedAnswerIndex !== undefined) {
      // Provide nothing to the user if they attempt to answer a question again
      return;
    }
    // Submit the selected answer to the store
    useQuizStore.getState().submitAnswer(question.id, index);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleOptionClick(index)}
          className={
            selectedAnswerIndex === index
              ? isAnswerCorrect
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};
