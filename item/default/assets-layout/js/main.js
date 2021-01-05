var postdate = new Date();
var post_y = document.getElementsByClassName("post-year");
var post_m = document.getElementsByClassName("post-month");
var post_mm = document.getElementsByClassName("post-month-digits");
var t;
for (t = 0; t < post_y.length; t++) {
  post_y[t].innerHTML = postdate.getFullYear();
}
for (t = 0; t < post_m.length; t++) {
  post_m[t].innerHTML = postdate.getMonth() + 1;
}
for (t = 0; t < post_mm.length; t++) {
  post_mm[t].innerHTML = ("0" + (postdate.getMonth() + 1)).slice(-2);
}

jQuery(document).ready(function() {
  var email_value = 'hello' + '@' + 'wp-talk' + '.com';
  jQuery('#email-info').html(email_value);
});

jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 50) {
      jQuery('#chat-button').fadeIn();
      jQuery('#back-to-top').fadeIn();
    } else {
      jQuery('#chat-button').fadeOut();
      jQuery('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  jQuery('#back-to-top').click(function() {
    // jQuery('#back-to-top').tooltip('hide');
    jQuery('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  // jQuery('#back-to-top').tooltip('show');
});

jQuery(document).on('click', function() {
  jQuery('.collapse').collapse('hide');
});

jQuery(document).ready(function() {
  jQuery('.dropdown, .btn-group').hover(function() {
    var dropdownMenu = jQuery(this).children('.dropdown-menu');
    if (dropdownMenu.is(':visible')) {
      dropdownMenu.parent().toggleClass('open');
    }
  });
});

jQuery(document).ready(function() {
  jQuery(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
  jQuery(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function() {
    jQuery(this).tab('show');
  });
  jQuery('[data-toggle="tooltip"]').tooltip()
});

// /**
//  * @param {string} url - The source image
//  * @param {number} aspectRatio - The aspect ratio
//  * @return {Promise<HTMLCanvasElement>} A Promise that resolves with the resulting image as a canvas element
//  */
// function crop(url, aspectRatio) {
//
//   // we return a Promise that gets resolved with our canvas element
//   return new Promise(resolve => {
//
//     // this image will hold our source image data
//     const inputImage = new Image();
//
//     // we want to wait for our image to load
//     inputImage.onload = () => {
//
//       // let's store the width and height of our image
//       const inputWidth = inputImage.naturalWidth;
//       const inputHeight = inputImage.naturalHeight;
//
//       // get the aspect ratio of the input image
//       const inputImageAspectRatio = inputWidth / inputHeight;
//
//       // if it's bigger than our target aspect ratio
//       let outputWidth = inputWidth;
//       let outputHeight = inputHeight;
//       if (inputImageAspectRatio > aspectRatio) {
//         outputWidth = inputHeight * aspectRatio;
//       } else if (inputImageAspectRatio < aspectRatio) {
//         outputHeight = inputWidth / aspectRatio;
//       }
//
//       // calculate the position to draw the image at
//       const outputX = (outputWidth - inputWidth) * .5;
//       const outputY = (outputHeight - inputHeight) * .5;
//
//       // create a canvas that will present the output image
//       const outputImage = document.createElement('canvas');
//
//       // set it to the same size as the image
//       outputImage.width = outputWidth;
//       outputImage.height = outputHeight;
//
//       // draw our image at position 0, 0 on the canvas
//       const ctx = outputImage.getContext('2d');
//       ctx.drawImage(inputImage, outputX, outputY);
//       resolve(outputImage);
//     };
//
//     // start loading our image
//     inputImage.src = url;
//   })
//
// }
