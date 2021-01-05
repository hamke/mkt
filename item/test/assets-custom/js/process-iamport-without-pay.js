function pay() {

  var post_slug = 'download-file-with-password';
  var product_name = '비밀번호 입력 후 파일 다운로드';

  var data = {
    product_url: 'https://news.mkttalk.com/entry/' + post_slug + '/',
    product_name: product_name,
    product_amount: 0,
    imp_uid: 'N/A',
    pg_tid: 'N/A',
    receipt_url: './',
    message: '테스트용 로그입니다 ( ~/process-iamport-without-pay.js )'
  };

  jQuery.ajax({
    url: "https://www.ttmkt.com/server/mkttalk-item/kakaopay-iamport-payment-without-pay/process-after-payment-success.php",
    // url: "./process-after-payment-success.php",
    type: 'POST',
    data: data,
    success: function(res) {

      window.location = res;

      // jQuery(".read-more-after-pay").hide();

      // jQuery(".ajax-return").html(
      //   // "<div class=\"py-5 text-center\">" +
      //   //   "<div class=\"\"><i class=\"fas fa-check\"></i> 파일이 다운로드되었습니다</div>" +
      //   // "</div>"
      //   res
      // );

    }
  });

}
