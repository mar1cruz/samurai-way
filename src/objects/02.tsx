type TechnologiesType = {
    id: number
    title: string
}

type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    name: 'Dima',
    age: 22,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },

    ]
}

console.log(student.technologies[2].title)
