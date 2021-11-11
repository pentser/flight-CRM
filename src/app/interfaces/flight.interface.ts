export interface FlightInterface {
  id:string;
  airline_name:string;
  origin_country_name:string;
  destination_country_name:string;
  departure_time:Date;
  landing_time:Date;
  remaining_tickets:number;
}
