import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }

  public show(): void {
    this._router.navigate(['playlists'], {relativeTo: this._route})
  }
}
