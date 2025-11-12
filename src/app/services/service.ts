import { Coche } from './../models/coche';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment.development';
import { Persona } from '../models/persona';
import { Plantilla } from './../models/plantilla';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private apiUrl = environment.urlApiPersonas;
  private apiCochesUrl = environment.urlCoches;
  private apiPlantillaUrl = environment.urlPlantilla;

  async getPersonas(): Promise<Persona[]> {
    const response = await axios.get<Persona[]>(`${this.apiUrl}api/personas`);
    return response.data;
  }

  async getCoches(): Promise<Coche[]> {
    const response = await fetch(`${this.apiCochesUrl}webresources/coches`);
    const data: Coche[] = await response.json();
    return data;
  }

  // Ejemplo adicional usando fetch
  /*async getPersonasConFetch(): Promise<Persona[]> {
    try {
      const response = await fetch(`${this.apiUrl}api/personas`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Persona[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener personas con fetch:', error);
      throw error;
    }
  }*/
  async getFunciones(): Promise<string[]> {
    const response = await fetch(`${this.apiPlantillaUrl}api/plantilla/funciones`);
    const data: string[] = await response.json();
    return data;
  }

  async getPlantillaFuncion(funcion: string): Promise<Plantilla[]> {
    const response = await fetch(
      `${this.apiPlantillaUrl}api/plantilla/plantillafuncion/${funcion}`
    );
    const data: Plantilla[] = await response.json();
    return data;
  }

  async getPlantillaFunciones(funciones: string[]): Promise<Plantilla[]> {
    const params = funciones.map((funcion) => `funcion=${encodeURIComponent(funcion)}`).join('&');
    const response = await fetch(
      `${this.apiPlantillaUrl}api/plantilla/plantillafunciones?${params}`
    );
    const data: Plantilla[] = await response.json();
    return data;
  }
}
