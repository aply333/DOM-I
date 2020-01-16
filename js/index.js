const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('a');
  navItems.forEach(el => {
  navItems.textContent = siteContent["nav"][el]
})

let ctaParent = document.querySelector(".cta");
  ctaParent.querySelector('h1').textContent = siteContent["cta"]["h1"]
  ctaParent.querySelector('button').textContent = siteContent["cta"]["button"]
  ctaParent.querySelector('img').setAttribute('src', siteContent["cta"]["img-src"])

let mainTextContent = document.querySelector(".main-content").querySelectorAll(".text-content")
    mainTextContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"]
    mainTextContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"]
    mainTextContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"]
    mainTextContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"]
    mainTextContent[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"]
    mainTextContent[2].querySelector('p').textContent = siteContent["main-content"]["services-content"]
    mainTextContent[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"]
    mainTextContent[3].querySelector('p').textContent = siteContent["main-content"]["product-content"]
    mainTextContent[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"]
    mainTextContent[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"]

document.querySelector(".main-content").querySelector("img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

// document.querySelector(".contact").querySelector("h4").textContent = siteContent["contact"]["contact-h4"]

let contactSection = document.querySelector(".contact")
let contactInfo = siteContent["contact"]

contactSection.forEach(el =>{
  console.log(el, "testing")
})

document.querySelector("footer").querySelector("p").textContent = siteContent["footer"]["copyright"]
      // let ctaH1 = document.querySelectorAll('h1');
// ctaH1.text = siteContent["cta"]['h1']

// let ctaButton = document.querySelectorAll('button');
// ctaButton.textContent = siteContent["cta"][["button"]]

// console.log('img-cta',ctaImg)
// ctaImg.setAttribute('src', siteContent["cta"]["img-src"])