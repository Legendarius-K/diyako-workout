// export const randomizeWorkouts = (workout: []) => {
//     for (let i = 0; i < 2; i++) {
//         workout.(Math.floor(Math.random))
//     }
// }



export const randomizeWorkout = (workouts: object[]) => {
    const getRandomIndex = () => Math.floor(Math.random() * workouts.length);

    let index1 = getRandomIndex();
    

   

    return workouts[index1];
};