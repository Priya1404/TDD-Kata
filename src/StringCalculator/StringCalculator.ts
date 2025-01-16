export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        const numArray = numbers.split(delimiter).map((num) => parseInt(num, 10));

        return numArray.reduce((sum, num) => sum + num, 0);
    }
}