// Create data... usually it comes from DB or API
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
  {
    name: 'Jane Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  },
  {
    name: 'William Johnson',
    age: 22,
    gender: 'male',
    lookingfor: 'female',
    location: 'NYC NY',
    image: 'https://randomuser.me/api/portraits/men/34.jpg'
  }
];


// create profile var and set to profile iterator and pass in data 
const profiles = profileIterator(data);


// call first profile manually
nextProfile();

// iterator through profiles... NEXT EVENT
document.getElementById('next').addEventListener('click', nextProfile)

// nextProfile click function / Display
function nextProfile() {
  // iterate with profiles.next().value
  const currentProfile = profiles.next().value;

  // Grab name of undfined
  if (currentProfile !== undefined) {
    // we want to get profile display and image and put content in
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} lookig for ${currentProfile.lookingfor}</li>
    </ul>
    `;
    // image display
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    // No more profiles sp reload page
    window.location.reload();
  }
}



// Create Iterator function
function profileIterator(profiles) {
  // create next index var
  let nextIndex = 0;

  // return function with next function
  return {
    next: function () {
      // return either value or done, done:false or done:true
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}



























