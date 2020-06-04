import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  //First & Last names
  if (variables.name == null) {
    var f_name = "Lucy";
  } else {
    f_name = variables.name;
  }
  if (variables.lastname == null) {
    var l_name = "Boilett";
  } else {
    l_name = variables.lastname;
  }

  //Twiter, Github, LinkedIn, Instagram
  if (variables.twitter == null) {
    var _twitter = "alesanchezr";
  } else {
    _twitter = variables.twitter;
  }
  if (variables.github == null) {
    var _github = "alesanchezr";
  } else {
    _github = variables.github;
  }
  if (variables.linkedin == null) {
    var _linkedin = "alesanchezr";
  } else {
    _linkedin = variables.linkedin;
  }
  if (variables.instagram == null) {
    var _instagram = "alesanchezr";
  } else {
    _instagram = variables.instagram;
  }

  //Social media
  if (
    variables.socialMediaPosition == null ||
    variables.socialMediaPosition == "position-right"
  ) {
    var sm_position = "position-right";
  } else if (
    variables.socialMediaPosition == "position-left" ||
    variables.socialMediaPosition == "left"
  ) {
    sm_position = "position-left";
  }

  //Role, City, Country
  if (variables.role == null) {
    var _role = "Web Developer";
  } else {
    _role = variables.role;
  }
  if (variables.city == null) {
    var _city = "Miami";
  } else {
    _city = variables.city;
  }
  if (variables.city == null) {
    var _city = "Miami";
  } else {
    _city = variables.city;
  }
  if (variables.country == null) {
    var _country = "USA";
  } else {
    _country = variables.country;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${f_name} ${l_name}</h1>
          <h2>${_role}</h2>
          <h3>${_city}, ${_country}</h3>
          <ul class="${sm_position}">
            <li><a href="https://twitter.com/${_twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${_github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${_linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${_instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
