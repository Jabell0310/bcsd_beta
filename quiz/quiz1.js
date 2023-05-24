const paymentMap = {
  KAKAO_PAYMENT: "카카오 결제처리",
  NAVER_PAYMENT: "쿠팡 결제 처리",
  PAYCO_PAYMENT: "카페이코 결제 처리",
  APPLE_PAYMENT: "애플 결제 처리",
};
function executePayment(paymentType) {
  return paymentMap[paymentType];
}
console.log(executePayment("KAKAO_PAYMENT"));
