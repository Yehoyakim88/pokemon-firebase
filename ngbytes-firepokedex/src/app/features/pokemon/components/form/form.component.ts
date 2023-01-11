import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly pokemon: Pokemon
  ) {}
  
  setForm() {
    this.form = this.formBuilder.group({
    name: [this.pokemon.name, [Validators.required]],
    type: [this.pokemon.type, [Validators.required]],
    description: [this.pokemon.description, [Validators.required]],
    height: [this.pokemon.height, [Validators.required]],
    weight: [this.pokemon.weight, [Validators.required]],
    imgUrl: [this.pokemon.imgUrl, [Validators.required]],
    });
  }


  submit() {
    // the ... is a typical JavaScript spread syntax 
    // [see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax]
    this.dialogRef.close({ ...this.pokemon, ...this.form.value });
  }


  ngOnInit(): void {
    this.setForm();
  }

}
