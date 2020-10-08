const uri = window.location.toString();
const clean_uri = uri.substring(0, uri.indexOf("?"));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const item_url_item_name = urlParams.get('item');
const item_url_price = urlParams.get('price');
const item_url_buyer_name = urlParams.get('name');

function numberComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// Item Name Setting
if ( typeof item_url_item_name !== 'undefined' && item_url_item_name !== null ) {
  $('#item_name_options').html('<span id="item_name" class="ml-2">' + item_url_item_name +'</span>');
} else {
  $('#item_name_options').html('<span id="item_name">기본 결제</span>');
}

// Price Setting
if ( typeof item_url_price !== 'undefined' && item_url_price !== null ) {
  $('#item_price_options').html('<span id="item_price" class="ml-2">' + numberComma(item_url_price) +'</span> KRW');
} else {
  $('#item_price_options').html('<input type="number" min="0" step="10" name="item_price" class="form-control" id="item_price" placeholder="예: 1000 (숫자만 입력해 주세요)" autofocus required >');
}

// Payer Setting
if ( typeof item_url_buyer_name !== 'undefined' && item_url_buyer_name !== null ) {
  $('#item_buyer_name_options').html('<span id="buyer_name" class="ml-2">' + item_url_buyer_name +'</span>');
} else {
  $('#item_buyer_name_options').html('<input type="text" name="buyer_name" class="form-control" id="buyer_name" placeholder="예: 김연아" required >');
}
