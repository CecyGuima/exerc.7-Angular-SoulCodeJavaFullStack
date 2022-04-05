import { Component, OnInit } from '@angular/core';
import { GhRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUser';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user: GhUser | null = null
  repos!: GhRepos[]

  constructor(private ghService: GhApiService) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {this.user = gUser}
    )

    this.ghService.findRepos(this.username).subscribe(
      (gRepos) => {this.repos = gRepos}
    )
  }
}
