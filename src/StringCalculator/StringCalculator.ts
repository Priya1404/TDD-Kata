export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = /,|\n/; // default delimiters : comma and newline

        if (numbers.startsWith("//")) {
            const customDelimiterMatch = numbers.match(/^\/\/\[(.+)\]\n/); // For long delimiters like [***]
            const singleDelimiterMatch = numbers.match(/^\/\/(.+)\n/); // For single-character delimiters like ;
            
            // Note: escaping special characters(like *, |) as they have special meaning in regular expression
              // '\\$&' ensures they are treated as literal characters
            if (customDelimiterMatch) {
                delimiter = new RegExp(customDelimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); 
                numbers = numbers.substring(customDelimiterMatch[0].length);
            } else if (singleDelimiterMatch) {
                delimiter = new RegExp(singleDelimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                numbers = numbers.substring(singleDelimiterMatch[0].length);
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