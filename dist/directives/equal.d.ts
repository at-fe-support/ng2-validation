import { OnInit } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class EqualValidator implements Validator, OnInit {
    equal: string;
    private validator;
    ngOnInit(): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
