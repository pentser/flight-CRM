export interface FlightInterface {
  id:string;
  airline_id:string;
  origin_country_id:number;
  destination_country_id:string;
  departure_time:Date;
  landing_time:Date;
  remaining_tickets:number;
}
