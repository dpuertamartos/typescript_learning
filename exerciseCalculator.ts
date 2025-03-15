interface CalculateExercisesResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}


const calculateExercises = (dailyExerciseHours: number[], target: number): CalculateExercisesResult => {
    const numberOfDays: number = dailyExerciseHours.length;
    const trainingDays: number = dailyExerciseHours.filter(hours => hours > 0).length;
    const totalHours: number = dailyExerciseHours.reduce((acc, curr) => acc + curr, 0);
    const average: number = totalHours / numberOfDays;

    let rating: number;
    let ratingDescription: string;

    if (average >= target) {
        rating = 3;
        ratingDescription = 'excellent';
    } else if (average >= target * 0.8) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 1;
        ratingDescription = 'bad';
    }

    return {
        periodLength: numberOfDays,
        trainingDays: trainingDays,
        success: average >= target,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    }
}


console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))