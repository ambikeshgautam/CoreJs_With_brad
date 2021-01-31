// ==============================================================================
/****
 * Window Menthos/Object / Properties
 */

let val;
// Outer height and width

val = window.outerHeight;
// console.log('height is ' + val);
val = window.outerWidth;

// Inner height and width
 val = window.innerHeight;
 val = window.innerWidth;

 // Scroll points
   val = window.scrollX;
   val = window.scrollY;
// Location Object
  val = window.location;
  val = window.location.hostname;
  val = window.location.port;
  val = window.location.href;
  val = window.location.search;

  // Redirect 
  // window.location.href = 'http://google.com';
  // Reload window
  // window.location.reload();


  // History Object

  window.history.go(-1);
  val = window.history.length;

  // Navigator Object

  val = window.navigator;
  val = window.navigator.appName;
  val = window.navigator.appVersion;
  val = window.navigator.userAgent;
  val = window.navigator.platform;
  val = window.navigator.vendor;
  val = window.navigator.language;
  console.log(val );


 
