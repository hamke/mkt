<?php
require_once( dirname(__FILE__) . '/iamport.php' );

//결제정보 확인 및 검증
$iamport = new Iamport( YOUR_IMP_REST_API_KEY, YOUR_IMP_REST_API_SECRET );
$iamport_result = $iamport->findByImpUID( $_POST('imp_uid') ); //IamportResult 를 반환(success, data, error)

if ( $iamport_result->success ) {

  $payment_data = $iamport_result->data;

  $iamport_order = $iamport->findByImpUID( $_POST('merchant_uid') );
  if ( empty($iamport_order) ) return '주문정보를 찾을 수 없습니다.';

  if ( floatval($payment_data->amount) != $iamport_order->get_order_amount() ) {
    return '결제요청금액과 승인된 금액이 다릅니다. 비정상적인 시도입니다.';
  }

  //결제완료처리
  $iamport_order->set_pay_method($payment_data->pay_method);
  $iamport_order->set_currency($payment_data->currency);
  $iamport_order->set_order_status($payment_data->status, $payment_data->pay_method);

  if ( $payment_data->status == 'paid' ) {
    $iamport_order->set_paid_amount( $payment_data->amount );
    $iamport_order->set_paid_date( $payment_data->paid_at );
    $iamport_order->set_receipt_url($payment_data->receipt_url);
  } else if ( $payment_data->status == 'cancelled' ) {
    $iamport_order->set_cancelled_date( $payment_data->cancelled_at );
    $iamport_order->set_cancel_reason( $payment_data->cancel_reason );
  }

  exit("Success");

} else {

  exit("Fail");

}
