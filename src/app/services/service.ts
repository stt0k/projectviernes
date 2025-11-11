import { Coche } from './../models/coche';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment.development';
import { Persona } from '../models/persona';
@Injectable({
  providedIn: 'root',
})
export class Service {
  private apiUrl = environment.urlApiPersonas;
  private apiCochesUrl = environment.urlCoches;

  async getPersonas(): Promise<Persona[]> {
      const response = await axios.get<Persona[]>(`${this.apiUrl}api/personas`);
      return response.data;
  }

  async getCoches(): Promise<Coche[]> {
      const response = await fetch(`${this.apiCochesUrl}webresources/coches`)
      const data: Coche[] = await response.json();
      return data;
  }

  async getPersonasConFetch(): Promise<Persona[]> {
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
  }
}
