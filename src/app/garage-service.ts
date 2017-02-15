import {Component} from '@angular/core';
import {SQLite} from 'ionic-native';
import {NavController, Platform} from 'ionic-angular';
import {Injectable} from '@angular/core';
 
export class Garage {
  id: number;
  sujet: string;
  descript: string;
  date: string;

  constructor(sujet: string, descript: string, id: number, date:string) {
    this.id = id;
    this.sujet = sujet;
    this.descript = descript;
    this.date = date;
  }
}
 
@Injectable()
export class GarageService {
  database: SQLite = null;
 
  // Init an empty DB if it does not exist by now!
  constructor( private platform: Platform) {
    this.database = new SQLite();
  }
 
  // Get all notes of our DB
  public getNotes() {
    return this.database.executeSql('SELECT * FROM notes', []);
  }
 
  // Save a new note to the DB
  // public saveNote(garage: Garage) {
  //    return this.database.executeSql('INSERT INTO notes (title, text) VALUES (?,?)', [note.title, note.text]);
  // }
 
  // // Update an existing note with a given ID
  // public updateNote(garage: Garage) {
  //   this.database.executeSql('UPDATE notes SET title = \"' + note.title + '\", text = \"' + note.text + '\" WHERE id = \"' + note.id + '\"',[]);
  // }
 
  // // Remoe a not with a given ID
  // public removeNote(garage: Garage) {
  //   this.database.executeSql('DELETE FROM notes WHERE id = \"' + note.id + '\"',[]);
  // }
}