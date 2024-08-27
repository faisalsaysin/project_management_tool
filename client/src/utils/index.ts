import React, { useEffect, useRef } from "react";

export const useDimensions = (
    ref: React.MutableRefObject<HTMLElement | null>
) => {
    const dimensions = useRef<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};

// export const formatDate = (date: Date) => {
//     const month = date.toLocaleString("en-US", { month: "short" });
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const formattedDate = `${day}-${month}-${year}`;
//     return formattedDate;
// };

// export function dateFormatter(dateString: string) {
//     const inputDate = new Date(dateString);
//     if (isNaN(inputDate.getTime())) {
//         return "Invalid Date";
//     }
//     const year = inputDate.getFullYear();
//     const month = String(inputDate.getMonth() + 1).padStart(2, "0");
//     const day = String(inputDate.getDate()).padStart(2, "0");

//     const formattedDate = `${year}-${month}-${day}`;
//     return formattedDate;
// }

//Optimised
//type DateFormat = 'YYYY-MM-DD' | 'DD-MMM-YYYY';

// export function formatDate(date: Date, format: DateFormat): string {
//     const day = date.getDate();
//     const month = date.toLocaleString("en-US", { month: "short" });
//     const year = date.getFullYear();

//     if (format === 'DD-MMM-YYYY') {
//         return `${day}-${month}-${year}`;
//     }

//     // Default to 'YYYY-MM-DD' format
//     const monthNumber = String(date.getMonth() + 1).padStart(2, "0");
//     const dayPadded = String(day).padStart(2, "0");
//     return `${year}-${monthNumber}-${dayPadded}`;
// }

export function getInitials(name: string): string {
    const nameParts = name.trim().split(" ");
    let firstInitial = "";
    let lastInitial = "";
    firstInitial = nameParts[0].charAt(0).toUpperCase();
    if (nameParts.length > 1) {
        lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    }
    return `${firstInitial}${lastInitial}`;
}
