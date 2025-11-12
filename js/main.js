import {partnerLogos, productList, partnerLogoBasePath} from "./data.js";

// nav
$(function(){
   $(".navbar").hidescroll();
});

// mobile dropdown menu
const toggleBtn = $("#toggle_btn");
const dropdownMenu = $(".dropdown-menu");

toggleBtn.click(() => {
    dropdownMenu.toggleClass("open");
    
});

//  partner logos


$(function(){
    const container = document.getElementById('partner-logo-list');
    partnerLogos.forEach(logo => {
        const img =  document.createElement('img');
        img.src = partnerLogoBasePath + logo.fileName;
        img.alt = logo.alt;
        img.classList.add('logo-ticker-image');
        container.appendChild(img);
    });
});

// products

$(function(){

    $("li:first").addClass("activeTab");

    $("li").on("click", function(){
        $("li").removeClass("activeTab");
        $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
    });


    $('#products-tabs').responsiveTabs({
        animation: 'slide',
    }); 
});
