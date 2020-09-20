export type Airport = {
  name: string;
  terminals: string[];
};

export type FormData = {
  name: string;
  mobile: string;
  dateOfArrival: Date;
  airportName?: string;
  terminalName?: string;
  flightNumber: string;
};
