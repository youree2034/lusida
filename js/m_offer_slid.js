$(function(){
    //함수를 실행한다.
    start();
    var imgs=2;//0,1,2까지 총3장의 이미지를 변수에 저장한다.
    var now=0;//0번째 사진부터 시작한다.

    //시작함수만들기
    function start(){
        //이미지의 첫번째 요소와 형제들에게 이미지를 좌우로 이동하게 하는 구문
        $('#m_offer_box img').eq(0).siblings().css({"margin-left":"-1000px"});
        //3초마다 슬라이드 된다.
        setInterval(function(){slide();},3000);
    };

    //slide함수만들기
    function slide(){
        //변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
        now=now==imgs?0:now+=1;
        //이전이미지는 옆으로 나간다.
        $('#m_offer_box img').eq(now-1).css({"margin-left":"-1000px"});
        //현재이미지는 가운데 위치한다.
        $('#m_offer_box img').eq(now).css({"margin-left":"0px"});
    };
});