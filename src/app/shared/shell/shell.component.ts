import { Component, OnInit } from '@angular/core';

// Imports
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  user;

  constructor(private BreakpointObserver: BreakpointObserver, private userService: UserService) { }

  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),shareReplay()
    )

    log_out_user(){
      this.userService.logOut()
    }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user =>{
      this.user = user;
    })
  }

}
