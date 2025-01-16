export class StringCalculator {
    add(numbers: string): number {
        if (!numbers) return 0;

        const numArray = numbers.split(',').map((num) => parseInt(num, 10));

        return numArray.reduce((sum, num) => sum + num, 0);
    }
}