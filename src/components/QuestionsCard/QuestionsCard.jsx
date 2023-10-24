import { CurrentQuestion } from "../CurrentQuestion/CurrentQuestion";
import { CurrentOptions } from "../CurrentOptions/CurrentOptions";
import "./QuestionsCard.css";

export const QuestionsCard = () => {
  return (
    <div className="current-question-container">
      <CurrentQuestion />
      <CurrentOptions />
    </div>
  );
};
