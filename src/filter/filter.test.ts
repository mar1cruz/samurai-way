import {CourseType} from "./filter";

test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('should take courses chipper 160', () => {
    const courses: CourseType[] = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]
    const chipPredicate = (course: CourseType) => {
        return course.price < 160
    }


    const chipCourses = courses.filter(chipPredicate)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('REACT')

})