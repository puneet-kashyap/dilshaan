import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBVWFYXwoqgs3PYbacWasa87vvlysePkng",
  authDomain: "dilshaan-8cb25.firebaseapp.com",
  databaseURL: "https://dilshaan-8cb25.firebaseio.com",
  projectId: "dilshaan-8cb25",
};
export const fire = firebase.initializeApp(config);
const fireDB = firebase.database();

export const writeInquiryData = (form) => {
  fireDB.ref('Inquiry/' + form.name).set({
    name: form.Name,
    phone: form.Phone,
    email: form.Email,
    date: form.date,
    time: form.time,
    comments: form.Comments
  });
}
