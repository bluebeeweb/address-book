import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  displayedColumns = [
    'thumbnail',
    'first name',
    'gender',
    'email',
    'phone',
  ];

  randomUser$ = this.peopleService.randomUser$;
  // randomUserResults$ = this.randomUser$.pipe(
  //   map(randomUsers => {
  //     for(const [key, value] of Object.entries(randomUsers)) {
  //       if (key === 'results') {
  //         for (let i = 0; i < value.length; i++) {
  //           console.log(value[i].gender)
  //         }
  //         console.log(value.length)
  //       }
  //     }
  //     Object.entries(randomUsers).forEach(([results, info]) => {
  //       console.log()
  //     });
  //     return randomUsers
  //   })
  // );

  paginatedPeople$ = this.peopleService.getPaginatedRandomUser().pipe(
    tap(_ => console.log(_))
  );
  constructor(private peopleService: PeopleService) { }



  ngOnInit(): void {
  }

  navigateToUserDetails(row: any) {
    console.log(`row on click: ${row.name.first}`);
  }
}
