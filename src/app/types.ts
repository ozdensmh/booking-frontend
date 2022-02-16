export type PassangerTitle=  {
    code: string;
    name: string;
  }

  export type Passengers = {
   
    bookingCode: string;
    id: string;
    firstName: string;
    lastName: string;
    title: PassangerTitle;
    
  }

  export type ContactDetails= {
    class: string;
    address: string;
  }
  
  export type Country= {
    code: string;
    name: string;
  }

  export type City = {
    IATACode: string;
    name: string;
    country: Country;
  }

  export type Origin= {
    IATACode: string;
    name: string;
    city: City;
  }

  export type SellingClass = {
    code: string;
  }

  export type ArrivalTerminal = {
    name : string;
  }

  export type OperatingFlight = {
    number: string;
    carrier: Country;
    duration: string;
    flown: boolean;
    checkInStart: string;
    localCheckInStart: string;
    checkInEnd: string;
    localCheckInEnd: string;
    scheduledArrival: string;
    localScheduledArrival: string;
    scheduledDeparture: string;
    localScheduledDeparture: string;
    arrivalTerminal: ArrivalTerminal;
    cabin: Country;
    equipment: Country;
  }

  export type MarketingFlight = {
    number: string;
    carrier: Country;
    status: Country;
    numberOfStops: number;
    sellingClass: SellingClass;
    operatingFlight: OperatingFlight;

  }

  export type Segments = {
    id: number;
    type: string;
    informational: boolean;
    departFrom: Origin;
    arriveOn: Origin;
    marketingFlight: MarketingFlight;
  }

  export type Connections= {
    id: number;
    duration: string;
    origin: Origin;
    destination: Origin;
    segments: [Segments];
  }

  export type Itinerary = {
    type: string;
    connections:[Connections];
  }

  export type RetrieveBooking = {
    
    bookingCode: string;
    contactDetails: [ContactDetails];
    itinerary: Itinerary;
    passengers: Passengers;
    
  }

  export interface RetrieveBookingResult {
  
    bookingCode: string;
    contactDetails: [ContactDetails];
    itinerary: Itinerary;
    passengers: Passengers;
  }