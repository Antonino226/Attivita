import { Component } from '@angular/core';
import { Attivita } from '../attivita';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.scss']
})
export class AttivitaComponent {
  attivitaList: Attivita[] = [];
  nuovaAttivita: any; // Inizializza con un oggetto vuoto

  AttivitaForm = this.fb.group({
    data: [null, Validators.required],
    descrizione: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
    this.caricaAttivitaDaLocalStorage();
  }

  ngOnInit() {}

  aggiungiAttivita() {
    if (this.AttivitaForm.valid) {
      const formData = this.AttivitaForm.value;
      this.nuovaAttivita = {
        data: formData.data,
        descrizione: formData.descrizione,
      };
      this.attivitaList.push(this.nuovaAttivita);
      this.salvaAttivitaInLocalStorage();
      this.AttivitaForm.reset(); // Resetta il form dopo l'aggiunta dell'attività
    }
  }

  salvaAttivitaInLocalStorage() {
    localStorage.setItem('attivitaList', JSON.stringify(this.attivitaList));
  }

  cancella(attivitaDaCancellare: Attivita) {
    const index = this.attivitaList.indexOf(attivitaDaCancellare);
    if (index !== -1) {
      this.attivitaList.splice(index, 1);
      this.salvaAttivitaInLocalStorage();
      // Controlla se la lista è vuota dopo la rimozione
    }
  }

  caricaAttivitaDaLocalStorage() {
    const storedAttivitaList = localStorage.getItem('attivitaList');
    if (storedAttivitaList) {
      this.attivitaList = JSON.parse(storedAttivitaList);
    }
  }
}