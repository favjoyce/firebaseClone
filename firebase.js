const searchInput=document.querySelector(`.search-placeholder`);
const searchInputDiv=document.querySelector(`.input-in-hover`);

searchInput.addEventListener(`focus`,()=>{
    searchInputDiv.classList.add(`expand`);
})

searchInput.addEventListener(`blur`,()=>{
    searchInputDiv.classList.remove(`expand`);
})

const themeButton = document.getElementById("themeButton");
const themeDropdown = document.getElementById("themeDropdown");
const themeOptions = document.querySelectorAll(".theme-option");
const themeLabel = document.querySelector(".theme-label");
const iconic= document.querySelector(".lighter");
// Open dropdown
themeButton.addEventListener("click", () => {
  themeDropdown.classList.toggle("show");
});

// Apply selected theme
themeOptions.forEach(option => {
  option.addEventListener("click", () => {
    const selected = option.getAttribute("data-theme");
    applyTheme(selected);
    themeDropdown.classList.remove("show");
  });
});

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    themeLabel.textContent = "Appearance: Light";
    iconic.textContent="light_mode"
    localStorage.setItem("theme", "light");
  } else if (theme === "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    themeLabel.textContent = "Appearance: Dark";
    iconic.textContent="dark_mode"

    localStorage.setItem("theme", "dark");
  } else if (theme === "system") {
    document.body.classList.remove("light-theme", "dark-theme");
    themeLabel.textContent = "Appearance: System";
    iconic.textContent="monitor"

    localStorage.setItem("theme", "system");
    applySystemTheme(); // apply based on system settings
  }
}

// Detect system preference
function applySystemTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("dark-theme", prefersDark);
  document.body.classList.toggle("light-theme", !prefersDark);
}

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "system";
  applyTheme(savedTheme);

  if (savedTheme === "system") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemTheme);
  }
});

// Optional: Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!themeButton.contains(e.target)) {
    themeDropdown.classList.remove("show");
  }
});


let languageActive=document.querySelector(`.languages-wrap`);
let langDropdown=document.querySelector(`.languages-dropdown`);
let wrap=document.querySelector(`.languages`);
let isOpen = false;
let icon=document.querySelector(`.arrow-lang`);

languageActive.addEventListener('click', () => {
  isOpen = true;
  langDropdown.classList.add('show');
  icon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_up
</span>`
});

wrap.addEventListener('mouseleave', () => {
  if (isOpen) {
    langDropdown.classList.remove('show');
    isOpen = false;

    icon.innerHTML=`<span class="material-symbols-outlined arrow-lang">
        arrow_drop_down
        </span>`
  }
});


let moreArrow=document.querySelector(`.more-hover`);
let morearrowicon=document.querySelector(`.more-arrow`);
let color;
moreArrow.addEventListener(`mouseenter`,()=>{
     morearrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_up
</span>`
const arrowSpan = morearrowicon.querySelector("span");
  arrowSpan.style.color = "#f99700";

})

moreArrow.addEventListener(`mouseleave`,()=>{
    morearrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_down
</span>`
  const arrowSpan = morearrowicon.querySelector("span");
  arrowSpan.style.color=`#606162`

})

let runArrow=document.querySelector(`.run-hover`);
let runarrowicon=document.querySelector(`.run-arrow`);
let rundropdown=document.getElementById(`run-dropdown`);

runArrow.addEventListener(`mouseenter`,()=>{
     runarrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_up
</span>`
const arrowSpan = runarrowicon.querySelector("span");
  arrowSpan.style.color = "#f99700";

})

runArrow.addEventListener(`mouseleave`,()=>{
    runarrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_down
</span>`
const arrowSpan = runarrowicon.querySelector("span");
  arrowSpan.style.color = "#606162";


})

let buildArrow=document.querySelector(`.build-hover`);
let buildarrowicon=document.querySelector(`.build-arrow`);
let builddropdown=document.getElementById(`build-dropdown`);

buildArrow.addEventListener(`mouseenter`,()=>{
     buildarrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_up
</span>`

const arrowSpan = buildarrowicon.querySelector("span");
  arrowSpan.style.color = "#f99700";
  builddropdown.style.visibility=`visible`
})

buildArrow.addEventListener(`mouseleave`,()=>{
    buildarrowicon.innerHTML=`<span class="material-symbols-outlined">
arrow_drop_down
</span>`
  const arrowSpan = buildarrowicon.querySelector("span");
  arrowSpan.style.color = "#606162";

})
let incLength=document.querySelector(`.app-arrow`);
let touch_div=document.querySelector(`.app-hosting`);

let incLength1=document.querySelector(`.aa1`);
let touch_div1=document.querySelector(`.aph1`);

let incLength2=document.querySelector(`.aa2`);
let touch_div2=document.querySelector(`.aph2`);


function arrowEnter(){
incLength.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave(){
  incLength.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength.querySelector("span");
  arrowSpan.style.color = "white"; 
}

function arrowEnter1(){
incLength1.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength1.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave1(){
  incLength1.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength1.querySelector("span");
  arrowSpan.style.color = "white"; 
}

function arrowEnter2(){
incLength2.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength2.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave2(){
  incLength2.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength2.querySelector("span");
  arrowSpan.style.color = "white"; 
}

touch_div.addEventListener(`mouseenter`,arrowEnter)
touch_div.addEventListener(`mouseleave`,arrowLeave)

touch_div1.addEventListener(`mouseenter`,arrowEnter1);
touch_div1.addEventListener(`mouseleave`,arrowLeave1);

touch_div2.addEventListener(`mouseenter`,arrowEnter2)
touch_div2.addEventListener(`mouseleave`,arrowLeave2)





let incLength3=document.querySelector(`.ar1`);
let touch_div3=document.querySelector(`.ah1`);

let incLength4=document.querySelector(`.ar2`);
let touch_div4=document.querySelector(`.ah2`);

let incLength5=document.querySelector(`.ar3`);
let touch_div5=document.querySelector(`.ah3`);


function arrowEnter3(){
incLength3.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength3.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave3(){
  incLength3.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength3.querySelector("span");
  arrowSpan.style.color = "white"; 
}

function arrowEnter4(){
incLength4.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength4.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave4(){
  incLength4.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength4.querySelector("span");
  arrowSpan.style.color = "white"; 
}

function arrowEnter5(){
incLength5.innerHTML=`<span class="material-symbols-outlined">
trending_flat</span>`
const arrowSpan = incLength5.querySelector("span");
  arrowSpan.style.color = "white"; 
}
function arrowLeave5(){
  incLength5.innerHTML=`<span class="material-symbols-outlined  ">arrow_forward</span>`;
  const arrowSpan = incLength5.querySelector("span");
  arrowSpan.style.color = "white"; 
}

touch_div3.addEventListener(`mouseenter`,arrowEnter3)
touch_div3.addEventListener(`mouseleave`,arrowLeave3)

touch_div4.addEventListener(`mouseenter`,arrowEnter4);
touch_div4.addEventListener(`mouseleave`,arrowLeave4);

touch_div5.addEventListener(`mouseenter`,arrowEnter5)
touch_div5.addEventListener(`mouseleave`,arrowLeave5)


let bright=document.querySelector(`.brightness`);
let darkbackground=document.querySelector(`.Js_white`);

let OnClick = false;

bright.addEventListener('click', () => {
  OnClick = !OnClick;
  if (OnClick) {
    darkbackground.style.backgroundColor = `#282828`;
    bright.innerHTML = `<span class="material-symbols-outlined">tonality_2</span>`;
  } else {
    darkbackground.style.backgroundColor = `white`;
    bright.innerHTML = `                    <span class="material-symbols-outlined ">
                    brightness_medium
                    </span>`;
  }
});

const textChange=document.querySelectorAll(`.readw`);
const textChangea=document.querySelectorAll(`.ar`);

// textChange.addEventListener(`mouseenter`,()=>{
// textChangea.style.color=(`#e85400`);
// textChange.style.color=(`#e85400`)
// })
// textChange.addEventListener(`mouseleave`,()=>{
// textChangea.style.color=(`white`);
// textChange.style.color=(`white`)
// })

textChange.forEach((item, index) => {
  let onClick = false; // Declare toggle state per item

  item.addEventListener('mouseenter', () => {
    if (!onClick) { // Only change color on hover if not clicked
      if (textChangea[index]) {
        textChangea[index].style.color = '#ff9400';
      }
      item.style.color = '#ff9400';
    }
  });

  item.addEventListener('mouseleave', () => {
    if (!onClick) {
      if (textChangea[index]) {
        textChangea[index].style.color = 'white';
      }
      item.style.color = 'white';
    }
  });

  item.addEventListener('click', () => {
    onClick = !onClick; // Toggle click state
    if (textChangea[index]) {
      textChangea[index].style.color = onClick ? '#ff9400' : 'white';
    }
    item.style.color = onClick ? '#ff9400' : 'white';
  });
});

let authClick=document.querySelector('.auth');
let read=document.querySelector(`.readandwrite`);
let sub=document.querySelector(`.sub`);
let log=document.querySelector(`.log`);
let save=document.querySelector(`.saveImg`);


let swift=document.querySelector(`.swiftbtn`);
let obj_c=document.querySelector(`.objcbtn`);
let Kotlin=document.querySelector(`.kotlinbtn`);
let java=document.querySelector(`.javabtn`);
let js=document.querySelector(`.jsbtn`);
let dart=document.querySelector(`.dartbtn`);
let unity=document.querySelector(`.unitybtn`);
let cplus=document.querySelector(`.cplusbtn`);
let whtext = document.querySelector('.whtext');

let buttons = document.querySelectorAll('.in-div-a');

let active = null;

authClick.addEventListener('click', () => {
  active = 'auth';
});

read.addEventListener(`click`,()=>{
  active='readandwrite'
})

const authCodes = {
  swift: `<span class="auth-color">Auth</span>.auth().addStateDidChangeListener { (auth, user) in <br>
  <span class="if-text">if</span> let user = user {<br> 
    let email = user.email <br>
   <span class="auth-color"> // ...</span> <br>
  } <br>
} <br>
<span class="auth-color">Auth</span>.auth().signIn(withEmail: userEmail, password: password) { (user, error) in <br>
  <span class="if-text">if</span> let user = user { <br>
    <span class="auth-color">   // ... </span><br>
  } <br>
} <br>`,

  objc: `[[FIRAuth auth] addAuthStateDidChangeListener:^(FIRAuth * _Nonnull auth,<br>
&nbsp;&nbsp;&nbsp;&nbsp;FIRUser * _Nullable user) {<br>
  if (user) {<br>
    NSString *email = user.email;<br>
    // ...<br>
  }<br>
}];<br>
[[FIRAuth auth] signInWithEmail:email password:password completion:^(FIRUser * _Nullable user,<br>
&nbsp;&nbsp;&nbsp;&nbsp;NSError * _Nullable error) {<br>
  if (error) {<br>
    // ...<br>
  }<br>
}];`,

  kotlin: `val auth = Firebase.auth;
auth.signInWithEmailAndPassword(email, password)
    .addOnCompleteListener(this) { task ->
        if (task.isSuccessful) {
            val user = task.result.user
            // ...
        }
    }`,
  java: `FirebaseAuth auth = FirebaseAuth.getInstance();
auth.signInWithEmailAndPassword(email, password)
    .addOnCompleteListener(new OnCompleteListener() {
        @Override
        public void onComplete(Task task) {
            if (task.isSuccessful()) {
                FirebaseUser user = task.getResult().getUser();
                String email = user.getEmail();
                // ...
            }
        }
    });`,
  js: `firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var email = user.email;
        // ...
    } else {
        // User is not signed in
        // ...
    }
});
firebase.auth().signInWithEmailAndPassword(email, password);`,
  dart: `FirebaseAuth.instance.authStateChanges().listen((User? user) {
    if (user != null) {
      // user is signed in
      var email = user.email;
    } else {
      // user is not signed in
      // …
    }
});

await FirebaseAuth.instance.signInWithEmailAndPassword(
    email: emailAddress,
    password: password
  );`,
  unity: `Firebase.Auth.FirebaseAuth auth = Firebase.Auth.FirebaseAuth.DefaultInstance;
auth.SignInWithEmailAndPasswordAsync(email, password).ContinueWithOnMainThread(task => {
  if (!(task.IsCanceled || task.IsFaulted)) {
    Firebase.Auth.FirebaseUser newUser = task.Result;
    Debug.LogFormat("User signed in successfully: {0} ({1})",
        newUser.DisplayName, newUser.UserId);
  }
});`,
  cplus: `firebase::auth::Auth *auth = firebase::auth::Auth::GetAuth(app);
auth->SignInWithEmailAndPassword(email, password);

// poll the result in your game loop
firebase::Future<firebase::auth::User *> result =
    auth->SignInWithEmailAndPasswordLastResult();

if (result.status() == firebase::kFutureStatusComplete) {
    if (result.error() == firebase::auth::kAuthErrorNone) {
        firebase::auth::User *user = *result.result();
        std::cout << Sign in succeeded for email << user->email() << std::endl;
    }
}`
};

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // <-- THIS stops the <a href=""> from refreshing the page

    if (active === 'auth') {
      const langClass = btn.classList[1]; // gets 'swiftbtn', 'objcbtn', etc.
      const langKey = langClass.replace('btn', ''); // 'swift', 'objc', etc.
      whtext.innerHTML = authCodes[langKey] || '// No code available';
    }
  else  if (active === 'readandwrite') {
      const langClass = btn.classList[1]; // gets 'swiftbtn', 'objcbtn', etc.
      const langKey = langClass.replace('btn', ''); // 'swift', 'objc', etc.
      whtext.innerHTML = authCodes[langKey] || '// No code available';
    }

  });
});




const slides = document.querySelectorAll('.mobile-slide');
const dots = document.querySelectorAll('.dot');
const carouselImages = document.getElementById('carousel-images');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  const offset = -index * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

document.getElementById('next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});
document.getElementById('prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showSlide(index);
  });
});

// Initial display
showSlide(0);
