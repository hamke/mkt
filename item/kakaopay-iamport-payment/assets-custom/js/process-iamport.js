var IMP = window.IMP; // 생략가능
IMP.init('imp21028697'); // hello@wp-talk.com (카카오페이)
// IMP.init('imp14840138'); // leden_online@naver.com ( 카카오페이 / 테스트 )
// IMP.init('imp94339910'); // mutualwide@163.com ( 카카오페이 / 테스트 )

function pay() {

  var post_slug = 'download-file-with-password';
  var product_url = 'https://news.mkttalk.com/entry/%EA%B8%B0%EC%B4%88-%EB%8B%A4%EC%9D%8CDaum-%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B8%B0%EC%97%85-%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%9A%8C%EC%9B%90-%EC%B6%94%EA%B0%80-%EB%B0%A9%EB%B2%95-%EB%A7%88%EC%BC%80%ED%8C%85%ED%86%A1';
  // var product_url = 'https://news.mkttalk.com/entry/' + post_slug + '/';
  var product_name = '비밀번호 입력 후 파일 다운로드';
  var product_amount = 55000;
  var product_buyer_name = '게스트(비회원)';
  // var product_price = document.getElementById('price');
  // var product_option = document.getElementById('selectBox');
  //
  // if ( product_price !== null ) {
  //   var product_amount = product_price.innerHTML;
  // } else if ( product_price == null && product_option !== null ) {
  //   var product_amount = product_option.options[selectBox.selectedIndex].value;
  // } else {
  //   var product_amount = 10;
  // }

  IMP.request_pay({
    name : product_name,
    amount : product_amount,
  	buyer_name : product_buyer_name
    // pg: 'inicis', // version 1.1.0부터 지원.
    // pay_method: 'card',
    // merchant_uid: 'merchant_' + new Date().getTime(),
    // buyer_email: 'iamport@siot.do',
    // buyer_tel: '010-1234-5678',
    // buyer_addr: '서울특별시 강남구 삼성동',
    // buyer_postcode: '123-456',
    // m_redirect_url: 'https://www.yourdomain.com/payments/complete'
  }, function(rsp) {

    if ( rsp.success ) {

      // jQuery(".read-more-after-pay").hide();
      //
      // jQuery(".ajax-return").html(
      //   "<div class=\"py-5 text-center\">" +
      //     "<div class=\"spinner-grow loader\" id=\"loader\" role=\"status\">" +
      //       "<span class=\"sr-only\">Please Wait ...</span>" +
      //     "</div>" +
      //     "<div class=\"loader\">잠시만 기다려 주세요 ...</div>" +
      //   "</div>"
      // );

      var message = '결제가 성공적으로 완료되었습니다.';

      var data = {
        message: message,
        product_url: product_url,
        product_name: product_name,
        product_amount: product_amount,
        imp_uid: rsp.imp_uid,
        pg_tid: rsp.pg_tid,
        receipt_url: rsp.receipt_url
      };

      jQuery.ajax({
        url: "https://www.wp-kr.com/item/download-file-with-password/process-after-payment-success.php",
        // url: "./process-after-payment-success.php",
        type: 'POST',
        data: data,
        success: function(res) {

          window.location = res;

          // jQuery(".ajax-return").html(
          //   "<div class=\"py-5 text-center\">" +
          //     "<div class=\"\"><i class=\"fas fa-check\"></i> 파일이 다운로드되었습니다</div>" +
          //   "</div>"
          //   res
          // );

        }
      });

    } else { // if ( !rsp.success )

        var message = '결제가 안전하게 취소/중단되었습니다.';
        var data = {
          message: message,
          product_url: product_url,
          product_name: product_name,
          product_amount: product_amount,
          imp_uid: 'N/A',
          pg_tid: 'N/A',
          receipt_url: 'N/A'
        };

        jQuery.ajax({
          url: "https://www.wp-kr.com/item/download-file-with-password/process-after-payment-failure.php",
          // url: "./process-after-payment-failure.php",
          type: 'POST',
          data: data
        });

        alert( message );
        // console.log( message );
    }
  });

};
