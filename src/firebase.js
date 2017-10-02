import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBJLz-Bh0_TntRuk0t9IccxmySBRh2YR_w",
    authDomain: "goalcoach-c52f3.firebaseapp.com",
    databaseURL: "https://goalcoach-c52f3.firebaseio.com",
    projectId: "goalcoach-c52f3",
    storageBucket: "",
    messagingSenderId: "755764150010"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');