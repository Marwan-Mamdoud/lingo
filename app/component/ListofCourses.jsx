import CourseCard from "./CourseCard";
import { getCourses, getUserprogress } from "@/action/userProgress";

const ListofCourses = async () => {
  const courses = await getCourses();
  const userProgress = await getUserprogress();
  return (
    <>
      <div className="text-4xl mb-10 text-neutral-600 font-extrabold">
        Language Courses
      </div>
      <div className="flex flex-wrap items-center justify-between w-full mx-auto">
        {courses?.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            active={userProgress?.activeCourseId._id === course._id}
          />
        ))}
      </div>
    </>
  );
};

export default ListofCourses;
