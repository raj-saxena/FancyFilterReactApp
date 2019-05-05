export interface City {
    name: string
}

export interface User {
    id: string
    display_name: string,
    job_title: string,
    main_photo?: string,
    age: number,
    height_in_cm: number,
    city: City,
    religion: string,
    favourite: boolean,
    compatibility_score: number
}