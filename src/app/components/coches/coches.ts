import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../services/service';
import { Coche } from '../../models/coche';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coches',
  imports: [CommonModule],
  template: `
     <div class="p-6 max-w-6xl mx-auto min-h-screen">
      <h2 class="text-2xl font-semibold text-white text-center mb-8">Lista de Coches</h2>
      @for (coche of coches; track coche.idcoche) {
        <div class="bg-zinc-800/30 border border-white/10 rounded-lg p-4 mb-4">
          <h3 class="text-lg font-bold text-white mb-3">{{ coche.marca }} {{ coche.modelo }}</h3>
          <p class="text-white mb-2">
            <span class="text-neutral-400">Modelo:</span> {{ coche.modelo }}
          </p>
          <p class="text-white">
            <span class="text-neutral-400">ID:</span> {{ coche.idcoche }}
          </p>
          <p class="text-white mb-2">
            <span class="text-neutral-400">Conductor:</span> {{ coche.conductor }}
          </p>
          <div class="mt-4">
            <img [src]="coche.imagen" alt="coche" class="w-full h-auto rounded-md" />
          </div>
        </div>
      }
    </div>
  `,
})
export class Coches implements OnInit {
  coches: Coche[] = []

  private cocheService = inject(Service)

  async ngOnInit() {
    await this.cargarCoches()
  }

  async cargarCoches() {
    try {
      this.coches = await this.cocheService.getCoches()
    } catch (error) {
      error = "No se puedieron cargar los coches"
      console.error('Error cargando coches:', error)
    }
  }
}
