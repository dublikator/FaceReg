export interface EmployeeCalendar{
    id:string,
    name:string,
    position:string,
    departments:Department[]
    calendar:Shift[]
}

export interface Department{
    id:string,
    name:string,
    customerId:string,
    directorId:string|null
}


export interface Shift{
    id:string,
    date:string,
    shiftPlan:ShiftPlan|null,
    shiftFact:ShiftFact|null
    differences:Difference[]
}

export interface ShiftPlan{
    id:string,
    timeStart:string,
    timeEnd:string,
    shiftId:string,
    departmentId:string
}

export interface ShiftFact{
    id:string,
    timeStart:string,
    timeEnd:string,
    shiftId:string,
    departmentId:string
}

export interface Difference{
    id:string,
    type:number,
    shiftId:string,
}




