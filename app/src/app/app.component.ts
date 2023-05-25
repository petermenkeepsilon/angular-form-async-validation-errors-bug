import { AsyncValidatorFn, FormControl } from "@angular/forms";
import { Component } from "@angular/core";
import { of } from "rxjs";

function conditionalAsyncValidator(
  condition: () => boolean,
  validator: AsyncValidatorFn
): AsyncValidatorFn {
  return (control) => {
    if (condition()) {
      return validator(control);
    } else {
      return of(control.errors);
    }
  };
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  runValidations = true;
  control = new FormControl("test", {
    asyncValidators: conditionalAsyncValidator(
      () => this.runValidations,
      (_) => of({ error: true })
    ),
  });
}
