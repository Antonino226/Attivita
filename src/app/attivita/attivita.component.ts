import { Component } from '@angular/core';
import { Attivita } from '../attivita';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrl: './attivita.component.scss'
})
export class AttivitaComponent {
  attivitaList: Attivita[] = [];
  nuovaAttivita: any;// Inizializza con un oggetto vuoto
  index:number = 0;

  AttivitaForm = this.fb.group({
    data: [new Date()],
    descrizione: [''],
  });

  constructor(private fb: FormBuilder) {
    this.caricaAttivitaDaLocalStorage();
  }

  ngOnit(){
  }

  aggiungiAttivita() {
    const formData = this.AttivitaForm.value;
    this.nuovaAttivita = {
      id: this.index, // Genera un ID univoco basato sul timestamp
      data: formData.data,
      descrizione: formData.descrizione,

    };
    this.attivitaList.push(this.nuovaAttivita);
    this.index++;
    this.salvaAttivitaInLocalStorage();
    this.AttivitaForm.reset(); // Resetta il form dopo l'aggiunta dell'attività
  }

  salvaAttivitaInLocalStorage() {
    localStorage.setItem('attivitaList', JSON.stringify(this.attivitaList));
  }

  cancella(attivitaDaCancellare: Attivita) {
    const index = this.attivitaList.indexOf(attivitaDaCancellare);
    if (index !== -1) {
      this.attivitaList.splice(index, 1);
      this.salvaAttivitaInLocalStorage();
    }
  }

  caricaAttivitaDaLocalStorage() {
    const storedAttivitaList = localStorage.getItem('attivitaList');
    if (storedAttivitaList) {
      this.attivitaList = JSON.parse(storedAttivitaList);
    }
  }
}
