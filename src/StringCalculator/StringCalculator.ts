export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = /,|\n/;

        if (numbers.startsWith("//")) {
            const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
            if (delimiterMatch) {
              delimiter = new RegExp(delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); 
              // Note: escaping special characters(like *, |) as they have special meaning in regular expression
              // '\\$&' ensures they are treated as literal characters
              numbers = numbers.substring(delimiterMatch[0].length);
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