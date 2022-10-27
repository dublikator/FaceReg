export interface ItemsList<TData>{
    items:TData[],
    total:number,
    page:number,
    size:number
}

export interface Response<TData>{
    data:TData
}