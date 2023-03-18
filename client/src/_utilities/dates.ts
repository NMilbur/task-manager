import { format } from "date-fns";

export const formatDate = (date: Date, toFormat = "MMMM d, y") => format(date, toFormat);
