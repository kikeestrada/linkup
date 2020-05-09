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
        mouseDrag       : true,
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
    container           : '#tnsVertical',
    items               : 3, 
    axis                : "vertical",
    swipeAngle          : false,
    speed               : 1000,
    nav                 : false,
    controlsText: [ 
      '<i class="fas fa-chevron-down"></i>',
      '<i class="fas fa-chevron-up"></i>'
    ]
  }); 
};


export const tnsSingle = () =>{
  let slider = tns({ 
    container           : '#tnsSingle',
    items               : 1, 
    slideBy             : 1,
    speed               : 1000,
    mode                : 'gallery',
    mouseDrag           : true,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};



export const tnsSyncing = () =>{
  let tnsSyncingFor = tns({
    container           : "#tnsSyncingFor",
    items               : 1,
    mode                : 'gallery',    
    speed               : 400,
    navContainer        : "#tnsSyncingNav",    
    navAsThumbnails     : true,
    mouseDrag       : true,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      640: {
        controls        : false,
        mouseDrag       : false,
        
      }
    }
  }); 

  
};

