import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const EQUAL_TO_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};

@Directive({
    selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
    providers: [EQUAL_TO_VALIDATOR]
})
export class EqualToValidator implements Validator, OnInit {
    @Input() equalTo: AbstractControl;

    private validator: ValidatorFn;

    ngOnInit() {
        console.log(this.equalTo);
        this.validator = CustomValidators.equalTo(this.equalTo);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
