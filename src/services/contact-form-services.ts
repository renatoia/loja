import { Injectable } from '@angular/core';

@Injectable()
export class ContactFormService{

    public name: string = '';
    public phone: string = '';
    public email: string = '';
    public comment: string = '';

    constructor() {}
    
}