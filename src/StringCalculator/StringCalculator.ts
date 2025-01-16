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

        return numArray.reduce((sum, num) => sum + num, 0);
    }
}