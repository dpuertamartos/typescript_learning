const calculateBmi = (height: number, weight: number): string => {
    const bmi: number = weight / (height / 100) ** 2;

    switch (true) {
        case bmi < 18.5:
            return 'Underweight range';
        case bmi >= 18.5 && bmi < 25:
            return 'Normal range';
        case bmi >= 25 && bmi < 30:
            return 'Overweight range';
        case bmi >= 30:
            return 'Obesity range';
    }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
console.log(calculateBmi(a,b))