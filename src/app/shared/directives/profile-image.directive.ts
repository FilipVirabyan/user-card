import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appProfileImage]'
})
export class ProfileImageDirective implements AfterViewInit{

    @HostListener('mouseover')
    public onHover() {
        this.elRef.nativeElement.style.border = '1px solid grey';
        this.elRef.nativeElement.style.cursor = 'pointer';

    }

    @HostListener('mouseleave')
    public onLeave() {
        this.elRef.nativeElement.style.border = 'none';
    }
    @Input()
    public userImage: string;
    @Input()
    public userGender: string;

    constructor(private  elRef: ElementRef,
                private  elemRender: Renderer2) {
    }

    ngAfterViewInit() {
        const imgPath: string = './assets/images/';

        if (this.userImage) {
            this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}${this.userImage}`);
        } else {
            if (this.userGender === 'male') {
                this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}male.png`);

            } else {
                this.elemRender.setAttribute(this.elRef.nativeElement, 'src', `${imgPath}female.jpg`);

            }
        }
    }
}
