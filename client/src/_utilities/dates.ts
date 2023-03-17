import { format } from "date-fns";

export const formatDate = (date: Date, toFormat: string = "MMMM d, y") => format(date, toFormat);
