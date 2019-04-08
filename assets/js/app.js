/******************************************
 *  Author : Steven G.
 *  Created On : Wed Mar 20 2019
 *  File : app.js
 *  PROPRIETARY RIGHTS NOTICE: All rights reserved. No part of this material may be reproduced or transmitted in any form or by any means, electronic, mechanical or otherwise, including photocopying and recording in connection with any information storage or retrieval system, without the written permission from AL Advantage LLC.
 * All Rights Reserved.
 *******************************************/

// Toggle Menu Icon
const hamburgerIcon = document.querySelector("#hamburger-icon");

// Mobile Menu Items
const mobileLinksWrapper = document.querySelector(".mobileLinks-wrapper");

// Close icon for mobile nav
const closeIcon = "/images/sprite.svg#icon-cross";

const openIcon = "/images/sprite.svg#icon-menu";
console.log(openIcon);
const iconEl = hamburgerIcon.children[0];

// Function to Show/Hide Mobile Menu Items
const showMenu = e => {
  mobileLinksWrapper.classList.toggle("showMenu");
  if (mobileLinksWrapper.classList.contains("showMenu")) {
    iconEl.setAttribute("xlink:href", closeIcon);
  } else {
    iconEl.setAttribute("xlink:href", openIcon);
  }
};
hamburgerIcon.addEventListener("click", showMenu);

// Scroll to Top button
const toTopBtn = document.getElementById("toTop");

// If user scrolls 200px from top show button, else hide it
window.onscroll = () => {
  const scrollPos =
    window.scrollY || window.pageYOffset || document.body.scrollTop;
  if (scrollPos > 200) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
toTopBtn.addEventListener("click", e => window.scrollTo(0, 0));

// Features buttons' redirects
const featuresBtns = document.querySelectorAll(".mainButton");
featuresBtns[0].addEventListener("click", e =>
  window.location.assign(
    "https://info.aladvantage.com/owner-benefits-elder-care-software/"
  )
);
featuresBtns[1].addEventListener("click", e =>
  window.location.assign(
    "https://info.aladvantage.com/senior-care-software-overview/"
  )
);
featuresBtns[2].addEventListener("click", e =>
  window.location.assign(
    "https://info.aladvantage.com/software-features-summary/administrative-features/",
    "_blank"
  )
);
featuresBtns[3].addEventListener("click", e =>
  window.location.assign("https://info.aladvantage.com")
);
featuresBtns[4].addEventListener("click", e =>
  window.location.assign(
    "https://info.aladvantage.com/owner-benefits-elder-care-software/contact-us/"
  )
);
