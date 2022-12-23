import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {HttpErrorResponse} from '@angular/common/http'
import {INotes} from '../notes'
import {NotesService} from '../notes.service'


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  public note:INotes = {
    _id: '',
    title: '',
    content: ''
  }

  constructor(private notesService: NotesService, private router: Router) {}

  createNote(event: any): void {
    this.notesService.createNote(this.note)
      .subscribe(
        (data: INotes) => this.router.navigate(['']),
        (error: HttpErrorResponse) => console.error(error)        
      )  
  }
}
