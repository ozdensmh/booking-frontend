import { Component, OnInit } from '@angular/core';
import {Apollo, gql,QueryRef} from 'apollo-angular';
import { Subscription } from 'rxjs';

import { CoursesService } from '../courses.service'

const GET_COURSES= gql`
  query GetCourses {
    courses {
      id
      title
    }
  }
`;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {
  // courses:any;
  // loading: boolean = false;
  // error: any;
  // topic: string ='';
  
  constructor(private coursesService: CoursesService) { }

  async ngOnInit():  Promise<void> {
    // await this.getCourses();
  }

  // async getCourses() {
  //   const result= await this.coursesService.getCourses(this.topic);
  //   console.log("result in list component",result);
  //   this.courses=result;
  // }
}


// this.apollo.watchQuery({
//   query: GET_COURSES,
// })
//   .valueChanges
//   .subscribe((result:any) => {
//     this.loading = result.loading;
//     this.courses = result.data.courses;
//   });
// }