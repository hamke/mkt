if(typeof item_slug !== 'undefined') {
  $.ajax({
    type: "POST",
    url: "https://api.wordpress.org/plugins/info/1.0/" + item_slug + ".json",
    // url: "https://api.wordpress.org/themes/info/1.1/?action=theme_information&request" + "[" + "slug" + "]=" + item_slug,
    dataType: "json",
    data: "{}",
    success: function (data) {
      if(data.download_link.substring(32,38) == 'plugin'){
        $('.item-type').html('Plugin');
      } else if(data.download_link.substring(31,36) == 'theme'){
        $('.item-type').html('Theme');
      } else{
        $('.item-type').html('Item');
      }

      var banner_png = 'https://ps.w.org/' + data.slug + '/assets/banner-772x250.png';
      var banner_jpg = 'https://ps.w.org/' + data.slug + '/assets/banner-772x250.jpg';
      var banner_default = 'https://hellotblog.files.wordpress.com/2020/07/wptalk-wordpress-logo-recommendations-800x400-1.png';

      var imgObj1 = new Image();
      imgObj1.src = banner_png;
      imgObj1.onload = function(){ $('.item-banner').attr('src', banner_png) };
      imgObj1.onerror = function(){
        var imgObj2 = new Image();
        imgObj2.src = banner_jpg;
        imgObj2.onload = function(){ $('.item-banner').attr('src', banner_jpg) };
        imgObj2.onerror = function(){ $('.item-banner').attr('src', banner_default) };
      };

      $('.item-name').html(data.name);
      $('.item-desc').html(data.sections.description);
      $('.item-desc a').attr('target', '_blank');
      $('.item-download').attr('href', data.download_link);
      $('.item-updated').html(data.last_updated.substring(0,10));

      document.querySelector('title').textContent = data.name + ' - WordPress.org Plugin';

      if(data.rating > 80){
        $('.item-rating').html('<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>');
      } else if (data.rating > 60){
        $('.item-rating').html('<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>');
      } else if (data.rating > 40){
        $('.item-rating').html('<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>');
      } else if (data.rating > 20){
        $('.item-rating').html('<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>');
      } else {
        $('.item-rating').html('<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>');
      }
      $('.item-total-ratings').html(numberComma(data.num_ratings));

    },
    error: function (result) {
      alert("상품 정보가 변경되었습니다. 불편을 드려 죄송합니다.");
      $(location).attr('href', './../../');
    }
  });
} else {
  alert("상품 정보가 변경되었습니다. 불편을 드려 죄송합니다.");
  $(location).attr('href', './../../');
}
