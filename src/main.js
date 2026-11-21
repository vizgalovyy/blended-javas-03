const coursesData = [
  {
    title: 'JavaScript Basics',
    price: 1200,
    students: 20,
    isActive: true,
  },
  {
    title: 'HTML & CSS',
    price: 900,
    students: 25,
    isActive: true,
  },
  {
    title: 'React Start',
    price: 1800,
    students: 0,
    isActive: false,
  },
];

// task-01

const getActiveCourses = courses => courses.filter(course => course.isActive);

console.log(getActiveCourses(coursesData));
// [
//   {
//     title: 'JavaScript Basics',
//     price: 1200,
//     students: 20,
//     isActive: true
//   },
//   {
//     title: 'HTML & CSS',
//     price: 900,
//     students: 25,
//     isActive: true
//   }
// ]

// task-02

const createCoursesOverview = courses => {
  const activeCources = getActiveCourses(courses);

  const titles = activeCources
    .toSorted((a, b) => a.price - b.price)
    .map(course => `${course.title} — ${course.price} грн`);

  const totalStudents = activeCources.reduce(
    (sum, course) => (sum += course.students),
    0
  );

  const allHaveStudents = activeCources.every(course => course.students > 0);

  const hasFreeCourse = activeCources.some(course => course.price === 0);

  return {
    titles,
    totalStudents,
    allHaveStudents,
    hasFreeCourse,
  };
};

console.log(createCoursesOverview(coursesData));
// {
//   titles: ['HTML & CSS — 900 грн', 'JavaScript Basics — 1200 грн'],
//   totalStudents: 45,
//   allHaveStudents: true,
//   hasFreeCourse: false
// }

// task-03

class Course {
  #students;
  constructor(courseInfo) {
    this.title = courseInfo.title;
    this.price = courseInfo.price;
    this.#students = courseInfo.students;
  }
  enrollStudent() {
    this.#students += 1;
  }
  getStudentsCount() {
    return this.#students;
  }
  getInfo() {
    return `${this.title}: ${this.#students} студентів, ${this.price} грн`;
  }
}

const course = new Course({
  title: 'JavaScript Basics',
  price: 1200,
  students: 20,
});

course.enrollStudent();

console.log(course.getStudentsCount()); // 21

console.log(course.getInfo());
// JavaScript Basics: 21 студентів, 1200 грн
