import { ILocation } from "./location";

export interface IVenue {

    /**
     * Venue location.
     */
    location: ILocation,

    /**
     * Name of the venue.
     */
    title: string,

    /**
     * Address of the venue.
     */
    address: string,

    /**
     * Foursquare identifier of the venue.
     */
    foursquare_id?: string
}