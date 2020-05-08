import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider" 

export const tnsCarousell = () =>{
	let slider = tns({
        container       : '#tnsCarousell',
        items           : 1,
        slideBy         : 1,
        autoplay        : false,
        mouseDrag       : true,
        swipeAngle      : true,
        speed           : 400,
        nav             : false,
        edgePadding     : 40,
        controlsText: [ 
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            480: {
                items   : 2
              },
            640: {
              items     : 3
            },
            800: {
                items   : 4
              },
            960: {
              items     : 5
            },
            1120: {
                items   : 6
              },
            1280: {
              items     : 7
            }
          }
    }); 
};


export const tnsSingle = () =>{
  let slider = tns({ 
    container       : '#tnsSingle',
    items           : 1,
    slideBy         : 1,
    mouseDrag       : true,
    speed           : 1000,
    mode            : "gallery",
    animateIn       : 'fadeIn',
    animateOut      : 'fadeIn',  
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};

export const tnsNavThumbnails = () =>{
  let slider = tns({ 
    container       : '#tnsNavThumbnails',
    items           : 1,
    slideBy         : 1,
    autoplay        : false,
    mouseDrag       : true,
    swipeAngle      : true,
    speed           : 1000,
    mode            : "gallery",
    animateIn       : 'fadeIn',
    animateOut      : 'fadeOut',    
    navContainer    : "#tnsThumbnails",
    navAsThumbnails : true,
    controls        : false
  }); 

  let tnsThumbnails = tns({ 
    container       : '#tnsThumbnails',
        items           : 1,
        slideBy         : 1,
        autoplay        : false,
        mouseDrag       : true,
        speed           : 400,
        nav : false,
        controlsText: [ 
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            480: {
                items   : 2
              },
            640: {
              items     : 3
            },
            800: {
                items   : 4
              }
          }
  }); 
};
