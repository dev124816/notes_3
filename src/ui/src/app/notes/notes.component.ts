import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HttpErrorResponse} from '@angular/common/http'
import {INotes} from '../notes'
import {NotesService} from '../notes.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public notes: INotes[] = []

  constructor(private notesService: NotesService, private router: Router) {}

  ngOnInit(): void {
    this.notesService.getNotes()
      .subscribe(
        (data: INotes[]) => this.notes = data,
        (error: HttpErrorResponse) => console.error(error)
      )  
  }

  updateNote(event: any, note: INotes): void {
    this.notesService.updateNote(note)
      .subscribe(
        (data: INotes) => this.ngOnInit(),
        (error: HttpErrorResponse) => console.error(error)        
      )  
  }

  deleteNote(event: any, _id: string): void {
    this.notesService.deleteNote(_id)
      .subscribe(
        (data: INotes) => this.ngOnInit(),
        (error: HttpErrorResponse) => console.error(error)        
      )  
  }
}
