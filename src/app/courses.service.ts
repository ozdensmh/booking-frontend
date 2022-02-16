import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';



export interface CourseResult{
  courses: any;
}

@Injectable({
  providedIn: 'root'
})


export class CoursesService {

  private getRetrieveBookingQuery: QueryRef<any, any>;

  constructor(private apollo: Apollo) { 
    this.getRetrieveBookingQuery= this.apollo.watchQuery({
      query: gql`query retrieveBooking($bookingCode: String!,$lastName:String!){
        retrieveBooking(bookingCode: $bookingCode, lastName: $lastName){
          bookingCode
        }
      }`
    })
  }

  async getCourses(bookingCode: string, lastName: string): Promise<any> {
    const result = await this.getRetrieveBookingQuery.refetch({ bookingCode,lastName });
    return result.data.retrieveBooking;
  }
}
