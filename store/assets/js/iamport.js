var IMP = window.IMP; // 생략가능
// IMP.init('imp21028697'); // hello@wp-talk.com (카카오페이)
// IMP.init('imp79611779'); // hello@ttmkt.com (카카오페이)
// IMP.init('imp78149347'); // hello@chinatalk.net (카카오페이)
IMP.init('imp14840138'); // leden_online@naver.com ( 카카오페이 / 테스트 )
// IMP.init('imp90524050'); // the235style@yahoo.com ( 나이스페이 / 테스트 )

function pay() {

  var product_price = document.getElementById('price');
  var product_option = document.getElementById('selectBox');

  if ( product_price !== null ) {
    var product_amount = product_price.innerHTML;
  } else if ( product_price == null && product_option !== null ) {
    var product_amount = product_option.options[selectBox.selectedIndex].value;
  } else {
    var product_amount = 1000;
  }

  IMP.request_pay({
    // amount : 10000,
    amount : product_amount,
  	buyer_name : '게스트(비회원)',
  	name : '디소스 #05'
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
      //[1] 서버단에서 결제정보 조회를 위해 jQuery ajax로 imp_uid 전달하기
      jQuery.ajax({
        url: './../../../process.php',
        type: 'POST',
        data: {
          imp_uid : rsp.imp_uid
          //기타 필요한 데이터가 있으면 추가 전달
        },
        success: function(response){
          var msg = '결제가 완료되었습니다.';
          alert(msg);
          console.log(msg);
          window.location = response;
        }
        // url: "./../../../kr/assets/js/example_get_by_imp_uid.php",
        // type: 'POST',
        // dataType: 'json',
        // data: {
        //   imp_uid : rsp.imp_uid
        //   //기타 필요한 데이터가 있으면 추가 전달
        // },
        // success: function (data) {
        //   console.log(data);
        //   var a = document.createElement('a');
        //   var url = window.URL.createObjectURL(data);
        //   a.href = url;
        //   a.download = 'myfile.pdf';
        //   document.body.append(a);
        //   a.click();
        //   a.remove();
        //   window.URL.revokeObjectURL(url);
        // }
        //
        // url: 'https://hellotblog.files.wordpress.com/2018/07/11.pdf',
        // method: 'GET',
        // xhrFields: {
        //   responseType: 'blob'
        // },
        // success: function (data) {
        //   var a = document.createElement('a');
        //   var url = window.URL.createObjectURL(data);
        //   a.href = url;
        //   a.download = 'myfile.pdf';
        //   document.body.append(a);
        //   a.click();
        //   a.remove();
        //   window.URL.revokeObjectURL(url);
        // }
      });
    } else {
        var msg = '결제에 실패하였습니다.';
        // msg += '에러내용 : ' + rsp.error_msg;
        alert(msg);
        console.log(msg);
    }
  });

};
