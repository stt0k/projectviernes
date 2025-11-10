import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../services/service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas',
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-6xl mx-auto min-h-screen">
      <h2 class="text-2xl font-semibold text-white text-center mb-8">Lista de Personas</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (persona of personas; track persona.IdPersona) {
        <div class="bg-zinc-800/30 border border-white/10 rounded-lg p-4">
          <h3 class="text-lg font-bold text-white mb-3">{{ persona.Nombre }}</h3>
          <p class="text-white mb-2">
            <span class="text-neutral-400">Email:</span> {{ persona.Email }}
          </p>
          <p class="text-white mb-2">
            <span class="text-neutral-400">Edad:</span> {{ persona.Edad }} años
          </p>
          <p class="text-white">
            <span class="text-neutral-400">ID:</span> {{ persona.IdPersona }}
          </p>
        </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Personas implements OnInit {
  personas: Persona[] = [];

  private personaService = inject(PersonaService);

  async ngOnInit() {
    await this.cargarPersonas();
  }

  async cargarPersonas() {
    try {
      this.personas = await this.personaService.getPersonas();
    } catch (error) {
      error = 'No se pudieron cargar las personas. Por favor, intente nuevamente.';
      console.error('Error cargando personas:', error);
    }
  }
}
