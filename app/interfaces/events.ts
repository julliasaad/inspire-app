export interface IGroup {
    name: string,
    urlname?: string,
    description?: string,
    link: string,
    group_photo: IGroupPhoto,
    photo: string,
    next_event: string
}

export interface IGroupPhoto {
    id: number,
    highres_link: string, 
    photo_link: string,
    thumb_link: string,
    type: string,
    base_url: string
}

export interface IEvent {
    id?: string,
    name: string,
    urlname?: string,
    description: string,
    local?: ILocal,
    link: string,
}

export interface ILocal {
    name: string,
    address: string,
    city: string
}