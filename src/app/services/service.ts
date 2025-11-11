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
    try {
      const response = await axios.get<Persona[]>(`${this.apiUrl}api/personas`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener personas:', error);
      throw error;
    }
  }

  async getCoches(): Promise<Coche[]> {
    try {
      const response = await fetch(`${this.apiCochesUrl}webresources/coches`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Coche[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener coches con fetch:', error);
      throw error;
    }
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
