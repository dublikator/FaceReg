import {Component, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeService} from "../../../shared/services/employee.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Employee} from "../../../shared/types/employee.types";
import {ActivatedRoute} from "@angular/router";


interface InputData {
    id: string,
    customerId?:string
}

@Component({
    selector: 'pp-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, OnDestroy {

    form!: FormGroup;
    subscription!: Subscription;
    @ViewChild('file') file!: ElementRef;

    constructor(private dialogRef: MatDialogRef<EmployeeEditComponent>,
                @Inject(MAT_DIALOG_DATA) private inputData: InputData,
                private readonly employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.initFormGroup();
        this.getData();
   }

    private initFormGroup() {
        this.form = new FormGroup({
            id: new FormControl(''),
            first_name: new FormControl(''),
            last_name: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            is_active: new FormControl(true),
            birthdate: new FormControl(new Date()),
            position: new FormControl(''),
            customer_id: new FormControl(this.inputData.customerId),
            departments: new FormControl([]),
        })
    }

    private getData() {
        if (!this.inputData.id) {
            return;
        }
        this.subscription = this.employeeService.byId(this.inputData.id).subscribe(
            (res) => {
                this.form.setValue(res.data);
            },
            (err) => {
                alert(err.message);
            }
        );
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    onSubmit() {
        if (this.form.value.id) {
            this.update()
        } else {
            this.create();
        }
    }

    private create() {
        let toAdd = {...this.form.value};
        this.employeeService.create(toAdd).subscribe(
            (res) => {
                this.afterSubmit(res);
            },
            (err) => {
                alert(err.message);
            }
        )
    }

    private update() {
        this.employeeService.update(this.form.value).subscribe(
            (res) => {
                this.afterSubmit(res.data);
            },
            (err) => {
                alert(err.message);
            }
        )
    }

    private afterSubmit(output:Employee) {
        this.dialogRef.close(output);
    }

    loadPhotoFromFile() {
        const file = this.file.nativeElement as HTMLInputElement;

        if (file.files && file.files.length) {
            for (let i = 0; i < file.files.length; ++i) {
                const reader = new FileReader();

                reader.onload = () => {
                    const dataUrl = reader.result as string
                    this.doPhotoAppend(dataUrl);
                }

                const oneFile = file.files![i];
                reader.readAsDataURL(oneFile);
            }
        }
    }

    private doPhotoAppend(dataUrl: string) {

        let data = dataUrl.replace(new RegExp("^.*,"), "");
        this.employeeService.addPhoto(this.form.value.id, {image: data}).subscribe(
            (res) => {
                console.log(res);
            },
            (err) => {
                alert(err.message)
            }
        )

    }

}
