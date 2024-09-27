import { getLessonsUnit, getUnitProgress } from "@/action/userProgress";
import LessonBtn from "./LessonBtn";

const Unit = async ({ unit }) => {
  const lessons = await getLessonsUnit(unit._id);
  const unitProgress = await getUnitProgress(unit._id);
  const activeLesson = unitProgress?.activeLesson;
  const activeLessonPersentage = 0;
  return (
    <div className="flex flex-col gap-4 mt-3">
      <div className="bg-green-400 text-white p-4 font-bold text-2xl w-full rounded-xl flex flex-col">
        <div className="space-y-2.5">
          <h1 className="text-2xl ">{unit.title}</h1>
          <p className="text-xl font-semibold">{unit.description}</p>
        </div>
      </div>
      <div className="mx-auto">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson._id === activeLesson?._id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonBtn
              key={lesson._id}
              id={lesson._id}
              index={index}
              title={lesson.title}
              completed={lesson.completed}
              current={isCurrent}
              locked={isLocked}
              totalCount={lessons.length - 1}
              percentage={activeLessonPersentage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Unit;
