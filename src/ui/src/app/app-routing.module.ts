import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {NotesComponent} from './notes/notes.component'
import {CreateNoteComponent} from './create-note/create-note.component'


const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: 'create',
    component: CreateNoteComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


export const routingComponents = [
  NotesComponent,
  CreateNoteComponent
]
