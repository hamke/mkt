var IMP = window.IMP; // 생략가능
// IMP.init('imp21028697'); // hello@wp-talk.com (카카오페이)
IMP.init('imp79611779'); // hello@ttmkt.com (카카오페이)
// IMP.init('imp14840138'); // leden_online@naver.com ( 카카오페이 / 테스트 )
// IMP.init('imp90524050'); // the235style@yahoo.com ( 나이스페이 / 테스트 )

function pay() {

  // Item Name Setting
  if ( typeof item_url_item_name !== 'undefined' && item_url_item_name !== null ) {
    var item_name_defined = item_url_item_name;
  } else {
    var item_name_defined = document.getElementById('item_name').value;
  }

  // Price Setting
  if ( typeof item_url_price !== 'undefined' && item_url_price !== null ) {
    var price_defined = item_url_price;
  } else {
    var price_defined = document.getElementById('item_price').value;
  }

  // Payer Setting
  if ( typeof item_url_buyer_name !== 'undefined' && item_url_buyer_name !== null ) {
    var buyer_name_defined = item_url_buyer_name
  } else {
    var buyer_name_defined = document.getElementById('buyer_name').value;
  }

  var item_name = item_name_defined;
  var item_price = price_defined;
  var item_buyer_name = buyer_name_defined;
  // var item_option = document.getElementById('selectBox');
  var item_buyer_email = document.getElementById('buyer_email').value;
  var item_buyer_tel = document.getElementById('buyer_tel').value;
  var gotcha = document.getElementById('gotcha').value;

  if ( gotcha !== '' ) {
    // console.log('gotcha!');
    return false;
  } else if ( ( item_name == '' ) || ( item_price == '' ) || ( item_buyer_name == '' ) || ( item_buyer_email == '' ) || ( item_buyer_tel == '' ) ) {
    alert('필수 입력란을 입력해 주세요');
    return false;
  } else if ( confirm('입력하신 정보가 맞습니까?') ) {

    IMP.request_pay({
      amount : item_price,
    	buyer_name : item_buyer_name,
    	name : item_name,
      // pg: 'inicis', // version 1.1.0부터 지원.
      // pay_method: 'card',
      // merchant_uid: 'merchant_' + new Date().getTime(),
      buyer_email: item_buyer_email,
      buyer_tel: item_buyer_tel
      // buyer_addr: '서울특별시 강남구 삼성동',
      // buyer_postcode: '123-456',
      // m_redirect_url: 'https://www.yourdomain.com/payments/complete'
    }, function(rsp) {
      if (rsp.success) {
        var msg = '결제가 완료되었습니다. ';
        msg += '고유ID : ' + rsp.imp_uid;
        msg += '상점 거래ID : ' + rsp.merchant_uid;
        msg += '결제 금액 : ' + rsp.paid_amount;
        msg += '카드 승인번호 : ' + rsp.apply_num;
      } else {
        var msg = rsp.error_msg;
        // var msg = '결제에 실패하였습니다. ';
        // msg += '에러내용 : ' + rsp.error_msg;
      }
      alert(msg);
      $("#product_info")[0].reset();
    }); // IMP.request_pay

  } else { // if all the input form is filled
    return false;
    $("#product_info")[0].reset();
  }
};
