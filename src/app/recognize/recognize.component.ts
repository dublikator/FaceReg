import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RecognizeService} from "../shared/services/recognize.service";
import {ActivatedRoute} from "@angular/router";
import {interval, Observable, take, merge} from "rxjs";
import {ProgressBarComponent} from "../shared/components/progress-bar/progress-bar.component";

enum State { Initial, Recognition, AcceptCameIn, AcceptCameOut};

@Component({
    selector: 'app-recognize',
    templateUrl: './recognize.component.html',
    styleUrls: [
        './recognize.component.scss',
    ]
})
export class RecognizeComponent implements OnInit, AfterViewInit {

    @ViewChild("video") private video!: ElementRef;
    @ViewChild("canvas") private canvas!: ElementRef;
    @ViewChild("employeeName") private textArea!: ElementRef;
    @ViewChild("progressBar") private progressBar!: ProgressBarComponent;

    private departmentId!: string;
    private employee!: any;

    _state: State = State.Initial;

    constructor(private readonly recognizeService: RecognizeService,
                private readonly activatedRoute: ActivatedRoute,) {
    }

    ngOnInit(): void {
        this.departmentId = this.activatedRoute.snapshot.params['departmentId'];
    }

    ngAfterViewInit(): void {
        this.playVideo();
    }

    public onRecognize(){

        let photo = this.getPhoto();
        this.state = State.Recognition;

        this.recognizeService.recognize(this.departmentId, photo).subscribe(
            recognizeResponse => {
                this.employee = recognizeResponse.data.employee;
                if (!recognizeResponse.data.open_shift_fact){
                    this.state = State.AcceptCameIn;
                }else{
                    this.state = State.AcceptCameOut;
                }
                this.textArea.nativeElement.innerHTML = this.employee.first_name +" "+this.employee.last_name;
            },
            error => {
                alert(error.message)
                this.state = State.Initial;
            }
        )
        this.progressBar.start();

    }

    public onCameIn(){
        this.recognizeService.checkIn(this.departmentId,this.employee.id).subscribe(
            checkInResponse =>{
                this.state = State.Initial;
            },
            error => {
                alert(error.message)
                this.state = State.Initial;
            }
        )
    }

    public onCameOut(){
        this.recognizeService.checkOut(this.departmentId, this.employee.id).subscribe(
            checkInResponse => {
                this.state = State.Initial;
            },
            error => {
                alert(error.message)
                this.state = State.Initial;
            }
        )
    }

    public onCancel(){
        this.state = State.Initial;
    }

    private playVideo(): void {

        let constraints = {
            video: {
                width: {ideal: 4096},
                height: {ideal: 2160},
                facingMode: 'user',
            },
            audio: false
        };

        navigator.mediaDevices.getUserMedia(constraints).then(
            stream => {
                this.video.nativeElement.srcObject = stream;
                this.video.nativeElement.play();
            }
        ).catch(err => {
                console.log("An error occurred: " + err)
            }
        )

    }

    private getPhoto(): string {

        const canvas = this.canvas.nativeElement;
        let video = this.video.nativeElement;

        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

        const quality = 1.0;
        const mime = 'image/jpeg';
        let data: string = canvas.toDataURL(mime, quality);
        data = data.toString().replace(new RegExp("^.*,"),"");

        return data;

    }

    private clearPhoto(): void {
        let canvas = this.canvas.nativeElement;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    public get state() {
        return this._state;
    }

    public set state(value: State) {

        this._state = value

        if (value == State.Initial) {
            this.setInitialState();
        }

        if (value == State.Recognition) {
            this.setRecognitionState();
        }

        if (value == State.AcceptCameIn) {
            this.setAcceptCameInState();
        }

        if (value == State.AcceptCameIn) {
            this.setAcceptCameInState();
        }

    }

    private setInitialState() {

        this.employee = undefined;
        this.clearPhoto();
        this.progressBar.stop();
        this.progressBar.update();
        // this.updateProgressBar();
    }

    private setRecognitionState() {
    }

    private setAcceptCameInState() {
    }

    private setAcceptCameOutState() {
        // this.updateProgressBar();
    }

}

