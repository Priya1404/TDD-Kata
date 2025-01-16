export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = /,|\n/; // default delimiters : comma and newline

        if (numbers.startsWith("//")) {
            const multipleDelimitersMatch = numbers.match(/^\/\/(\[.+\])+\n/);
            if (multipleDelimitersMatch) {
                // Extract all delimiters enclosed in square brackets
                const delimiters = multipleDelimitersMatch[0]
                    .match(/\[.*?\]/g) 
                    ?.map((d) => d.slice(1, -1))
                    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) ?? []; 

                    // Note: escaping special characters(like *, |) as they have special meaning in regular expression
                    // '\\$&' ensures they are treated as literal characters

                delimiter = new RegExp(delimiters?.join("|")); // Combine all delimiters into a regex
                numbers = numbers.substring(multipleDelimitersMatch[0].length);
            } else {
                // Handle single-character or single long delimiter
                const singleDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
                if (singleDelimiterMatch) {
                    delimiter = new RegExp(singleDelimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                    numbers = numbers.substring(singleDelimiterMatch[0].length);
                }
            }
        }
        
        const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));
        const negatives = numArray.filter((num) => num < 0);

        if (negatives.length > 0) {
         throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return numArray.reduce((sum, num) => (num > 1000 ? sum : sum + num), 0);
    }
}