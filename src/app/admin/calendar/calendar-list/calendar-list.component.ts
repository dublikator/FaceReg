import {Component, OnInit} from '@angular/core';
import { EmployeeCalendar } from "../../../shared/types/calendar.types";
import { CalendarService } from "../../../shared/services/calendar.service";


@Component({
    selector: 'pp-calendar',
    templateUrl: './calendar-list.component.html',
    styleUrls: ['./calendar-list.component.scss', '../../styles.scss']
})
export class CalendarListComponent implements OnInit {

    public employeesCalendars: EmployeeCalendar[] =

        [
            {
                "name": "Лагунов Артур Сергеевич",
                "position": "Супер ответственный",
                "departments": [
                    {
                        "name": "string",
                        "customerId": "41452738-8449-4e29-a140-b6cffcd047eb",
                        "directorId": null,
                        "id": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                    }
                ],
                "id": "11615768-b7ee-439a-8ca2-bc13c11ffea3",
                // "headDepartments": [],
                "calendar": [
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                      {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                      {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                ]
            },
            {
                "name": "Иванов Иван Иванович",
                "position": "Супер ответственный",
                "departments": [
                    {
                        "name": "string",
                        "customerId": "41452738-8449-4e29-a140-b6cffcd047eb",
                        "directorId": null,
                        "id": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                    }
                ],
                "id": "11615768-b7ee-439a-8ca2-bc13c11ffea3",
                // "headDepartments": [],
                "calendar": [
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                      {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                      {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": null,
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                                    {
                        "id": "029a4b15-991a-4e97-9241-5b04f734b456",
                        "date": "2022-05-30",
                        "shiftPlan": {
                            "id": "6826eb7f-a2af-4532-b26b-157bb096bf2a",
                            "timeStart": "08:00",
                            "timeEnd": "15:00",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349"
                        },
                        "shiftFact": {
                            "timeStart": "08:00",
                            "timeEnd": "14:00",
                            "departmentId": "8a9ecd03-75ee-40a2-ae47-b2d17115e349",
                            "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            "id": "a8af9b59-5c0d-4881-87f1-64f90d109416"
                        },
                        "differences": [
                            {
                                "id": "f338e0e2-d8e4-4428-8fc6-b742d9ba761d",
                                "type": 1,
                                "shiftId": "029a4b15-991a-4e97-9241-5b04f734b456",
                            }
                        ]
                    },
                ]
            },
        ];


    constructor(private calendarService: CalendarService) {

        // calendarService.shiftGet()

    }

    ngOnInit(): void {
    }

    onPeriodChange(something:any){
    }

}
