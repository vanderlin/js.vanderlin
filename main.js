function include(file) {

  var script  = document.createElement('script');
  script.src  = "assets/js/js.vanderlin/"+file;
  script.type = 'text/javascript';
  script.defer = true;

  console.log($(document).find('head'));
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}

/* include any js files here */include('jquery.autoloadtabs.js');
