import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider" 

export const tnsCarousell = () =>{
	let slider = tns({
        container       : '#tnsCarousell',
        items           : 1,
        slideBy         : 1,
        swipeAngle      : false,
        speed           : 400,
        edgePadding     : 40,
        nav             : false,
        controlsText    : [ 
          '<i class="tns-carousell__prev fas fa-chevron-left"></i>',
          '<i class="tns-carousell__next fas fa-chevron-right"></i>'
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


export const tnsVertical = () =>{
  let slider = tns({ 
    container       : '#tnsVertical',
    items           : 3, 
    axis            : "vertical",
    swipeAngle      : false,
    speed           : 1000,
    nav             : false,
    controlsText: [ 
      '<i class="fas fa-chevron-down"></i>',
      '<i class="fas fa-chevron-up"></i>'
    ]
  }); 
};


export const tnsSingle = () =>{
  let slider = tns({ 
    container       : '#tnsSingle',
    items           : 1, 
    slideBy         : 1,
    speed           : 1000,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};



export const tnsSyncing = () =>{
  let sliderFor = tns({
    container       : "#tnsSyncingFor",
    items           : 1,
    mode:'gallery',
    navContainer    : "#tnsSyncingNav",
    navAsThumbnails : true,
    controls: false,
    swipeAngle      : false,
    speed           : 400 
  }); 

  let sliderNav = tns({ 
    container       : "#tnsSyncingNav",
    items           : 4, 
    speed           : 400,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};

