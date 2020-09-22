export const name = (name: string) => {
  return name.trim() !== "";
};

export const mobile = (phone: string) => {
  return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone.trim());
};

export const flightNumber = (flight: string) => {
  return /(?<![A-Z])[A-Z]{2}\d{3,4}(?!\d)/.test(flight.trim());
};

export const dateOfArrival = (dt: Date) => {
  const today = new Date();
  return (
    dt.getDate() >= today.getDate() &&
    dt.getMonth() >= today.getMonth() &&
    dt.getFullYear() >= today.getFullYear()
  );
};
