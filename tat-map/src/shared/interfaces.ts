export interface Artist {
    name: string;
    location: {
      lat: number;
      long: number;
    };
    address: string;
    style: string;
    instagram: string;
  }


export interface Point {
    lat: number;
    lng: number;
    color: string;
    artist: Artist; // Assuming Artist is the interface you've already defined
  }