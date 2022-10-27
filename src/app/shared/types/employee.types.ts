export interface EmployeeListItem{
    id:string,
    first_name:string,
    last_name:string,
    email:string,
    is_active:boolean,
    position:string
}

export interface Employee{
    id:string,
    first_name:string,
    last_name:string,
    email:string,
    phone:string,
    is_active:boolean,
    birthdate:string,
    position:string,
    customer_id:string
}