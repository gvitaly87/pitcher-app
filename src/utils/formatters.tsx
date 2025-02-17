export const formatDate = (date: Date): string =>
  `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;

export const formatPlayerStatus = (status: string): string =>
  status.replace(/\s+/g, "-").toLocaleLowerCase();

export const getLastName = (name: string): string => name.split(" ")[1];
