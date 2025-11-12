import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../../services/service';
import { Plantilla as PlantillaModel } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionmultiple',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-6xl mx-auto min-h-screen">
      <h2 class="text-2xl font-semibold text-white text-center mb-8">
        Gestión de Plantilla Múltiple
      </h2>

      <div class="mb-6 flex flex-col gap-4 items-center justify-center">
        <div class="w-full max-w-md">
          <label class="block text-white mb-3 font-medium">Seleccione múltiples funciones:</label>
          <select
            [(ngModel)]="funcionesSeleccionadas"
            multiple
            size="8"
            class="w-full bg-zinc-800/30 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            @for (funcion of funciones; track funcion) {
            <option [value]="funcion" class="text-white py-2">
              {{ funcion }}
            </option>
            }
          </select>
        </div>

        <button
          (click)="mostrarPlantillas()"
          class="px-6 py-2 bg-zinc-800/30 text-white border border-white/10 rounded hover:bg-zinc-700/50"
        >
          Mostrar Plantillas Seleccionadas
        </button>
      </div>

      <div class="bg-zinc-800/30 border border-white/10 rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-zinc-900/50">
            <tr>
              <th class="px-4 py-3 text-left text-white">ID Empleado</th>
              <th class="px-4 py-3 text-left text-white">Apellido</th>
              <th class="px-4 py-3 text-left text-white">Función</th>
              <th class="px-4 py-3 text-left text-white">Turno</th>
              <th class="px-4 py-3 text-left text-white">Salario</th>
              <th class="px-4 py-3 text-left text-white">Hospital</th>
              <th class="px-4 py-3 text-left text-white">Sala</th>
            </tr>
          </thead>
          <tbody>
            @for (empleado of plantillas; track empleado.idEmpleado) {
            <tr class="border-t border-white/10 hover:bg-zinc-700/30">
              <td class="px-4 py-3 text-white">{{ empleado.idEmpleado }}</td>
              <td class="px-4 py-3 text-white">{{ empleado.apellido }}</td>
              <td class="px-4 py-3 text-white">{{ empleado.funcion }}</td>
              <td class="px-4 py-3 text-white">{{ empleado.turno }}</td>
              <td class="px-4 py-3 text-white">
                {{ empleado.salario | currency : 'EUR' : 'symbol' : '1.2-2' }}
              </td>
              <td class="px-4 py-3 text-white">{{ empleado.idHospital }}</td>
              <td class="px-4 py-3 text-white">{{ empleado.idSala }}</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class PlantillaFuncionMultiple implements OnInit {
  funciones: string[] = [];
  plantillas: PlantillaModel[] = [];
  funcionesSeleccionadas: string[] = [];

  private service = inject(Service);

  async ngOnInit() {
    this.funciones = await this.service.getFunciones();
  }

  async mostrarPlantillas() {
    this.plantillas = await this.service.getPlantillaFunciones(this.funcionesSeleccionadas);
  }
}
