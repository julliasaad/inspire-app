export interface IGroup {
    name: string,
    description?: string,
    link: string,
    group_photo: IGroupPhoto,
    photo: string
}

export interface IGroupPhoto {
    id: number,
    highres_link: string, 
    photo_link: string,
    thumb_link: string,
    type: string,
    base_url: string
}