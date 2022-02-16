import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import {RetrieveBooking, Passengers,RetrieveBookingResult} from "../types"

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private getRetrieveBookingQuery: QueryRef<{retrieveBooking: RetrieveBookingResult}, {bookingCode:Passengers["bookingCode"], lastName:Passengers["lastName"]}>;

  constructor(private apollo: Apollo) { 
    this.getRetrieveBookingQuery= this.apollo.watchQuery({
      query: gql`query retrieveBooking($bookingCode: String!,$lastName:String!){
        retrieveBooking(bookingCode: $bookingCode, lastName: $lastName){
          bookingCode
          contactDetails {
            class
          }
          itinerary {
            type
            connections{
              duration
              segments{
                type
                departFrom{
                  IATACode
                  city{
                    name
                  }
                }
                arriveOn{
                  IATACode
                  city{
                    name
                  }
                }
                marketingFlight{
                  operatingFlight{
                    localScheduledArrival
                    localScheduledDeparture
                  }
                }
              }
            }
          }
          passengers {
            id
            firstName
            lastName
          }
        }
      }`
    })
  }
  
  async getBookingDetails(bookingCode: string, lastName: string): Promise<RetrieveBooking> {
    const result = await this.getRetrieveBookingQuery.refetch({ bookingCode,lastName });
    return result.data.retrieveBooking;
  }
}
