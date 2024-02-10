const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

export type CourseType = {
    title: string
    price: number
}


const courses: CourseType[] = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const chipPredicate = (course: CourseType) => {
    return course.price < 160
}