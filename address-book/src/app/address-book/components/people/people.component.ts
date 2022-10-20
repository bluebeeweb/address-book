import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  randomUser$ = this.peopleService.randomUser$;
  randomUserResults$ = this.randomUser$.pipe(
    map(randomUsers => {
      for(const [key, value] of Object.entries(randomUsers)) {
        if (key === 'results') {
          for (let i = 0; i < value.length; i++) {
            console.log(value[i].gender)
          }
          console.log(value.length)
        }
      }
      Object.entries(randomUsers).forEach(([results, info]) => {
        console.log()
      });
      return randomUsers
    })
  );
  constructor(private peopleService: PeopleService) { }

  paginatedPeople$ = this.peopleService.getPaginatedRandomUser();


  ngOnInit(): void {
  }

}
