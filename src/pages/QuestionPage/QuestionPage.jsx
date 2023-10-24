import { QuestionsCard } from "../../components/QuestionsCard/QuestionsCard";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Button } from "../../components/Button/Button";
import "./QuestionPage.css";

export const QuestionPage = () => {
  return (
    <section className="questions-wrapper">
      <ProgressBar />
      <QuestionsCard />
      <Button />
    </section>
  );
};
