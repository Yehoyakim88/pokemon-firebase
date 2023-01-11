import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class PokemonModule { }
