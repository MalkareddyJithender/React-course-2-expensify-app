import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

 //this code should connect to firebase database from this file
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {firebase,database as default}




  //   database.ref('expenses').on('child_removed',(dataSnapshot) =>
  //   {
  //     console.log(dataSnapshot.key,dataSnapshot.val());
  //   });

  //   database.ref('expenses').on('child_changed',(dataSnapshot) =>
  //   {
  //     console.log(dataSnapshot.key,dataSnapshot.val());
  //   });

  //   database.ref('expenses').on('child_added',(dataSnapshot) =>
  //   {
  //     console.log(dataSnapshot.key,dataSnapshot.val());
  //   });

  //   database.ref('expenses').on('value',(dataSnapshot) =>
  //   {
  //     const expenses = [];
  //     dataSnapshot.forEach((childDataSnapshot) =>
  //     {
  //         expenses.push({
  //             id:childDataSnapshot.key,
  //             ...childDataSnapshot.val()
  //         });
  //     });
  //     console.log(expenses);
  //   },(e) =>
  //   {
  //     console.log('error fetching data!',e);
  //   });


  //   database.ref('expenses').push({
  //       description:'Fast-Food & Drinks',
  //       amount:1000,
  //       createdAt:20000,
  //       note:'only one month Pocket Money!'
  //   });


  // database.ref('works/-MFocD-dXH31MBtrpogw').remove();
  //   database.ref('works').push({
  //       id:'02',
  //       work:'breakfast'
  //   });

  //   const workss = [
  //       {
  //           id:'01',
  //           work:'wake up early in the morning'
  //       },
  //       {
  //           id:'02',
  //           work:'take breakfast'
  //       },
  //       {
  //           id:'03',
  //           work:'sleep at night'
  //       }
  //   ];

  // const firebaseWorks = 
  // {
  //     works:{
  //         djfhjsk:
  //         {
  //             id:'01',
  //             work:'wake up early in the morning'
  //         },
  //         sfhkjjk:
  //         {
  //             id:'01',
  //             work:'wake up early in the morning'
  //         }
  //     }
  // }


  // one way to fetch data from database.once method cant watches data for changes.
  //   database.ref()
  //   .once('value')
  //   .then((dataSnapshot) =>
  //   {
  //       const val = dataSnapshot.val();
  //       console.log(val);
  //     }).catch((e) =>
  //     {
  //         console.log('fetching failed!',e);
  //     });

  // second way:on method watches for changes in data and we will get notified when changed!
  // database.ref().on('value',(dataSnapshot) =>
  // {
  //     const val = dataSnapshot.val();
  //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // },(e) =>
  // {
  //     console.log('fetching failed!',e);
  // });


  // ref refernces to parts/location of database
  //   database.ref().set({
  //       name:'Malkareddy Jithender',
  //       age:20,
  //       stresslevel:6,
  //       job:{
  //         title:'Full Stack Web Developer',
  //         company:'google'
  //       },
  //       location:{
  //           city:'Nizamabad',
  //           country:'India'
  //       }
  //   }).then((data) =>
  //   {
  //       console.log('data is succesfully saved...',data);
  //   }).catch((error) =>
  //   {
  //       console.log('failed to save',error);
  //   });

  // database.ref('isSingle').remove().
  // then(() =>
  // {
  //     console.log('data is removed.');
  // }).catch((e) =>
  // {
  //     console.log('data wont removed',e);
  // });

  //  database.ref().update(
  // {
  //     stresslevel:9,
  //     'job/company':'Amazon',
  //     'location/city':'Hyderabad'
  // })
  //  .then(() =>
  //  {
  //      console.log('data is succusfully updated!');
  //  }).catch((e) =>
  //  {
  //      console.log('data wont be updated',e);
  //  });


  // database.ref().set('This is my data');
  //   database.ref().set({
  //       age:21
  //   });
  // database.ref('age').set(21);
  // database.ref('location/city').set('Hyderabad');

  // database.ref('attributes').set({
  //     height:5.6,
  //     weight:49
  // }).then((data) =>
  // {
  //     console.log('data succesfully saved.',data);
  // }).catch((e) =>
  // {
  //     console.log('Failed To Save!',e);
  // });