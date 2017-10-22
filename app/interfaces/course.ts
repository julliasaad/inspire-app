export interface ICourse {
    name?: string,
    description?: string,
    category?: ICategory,
    link?:string
}

export interface ICategory {
    frontend?: boolean,
    backend?: boolean,
    database?: boolean
}