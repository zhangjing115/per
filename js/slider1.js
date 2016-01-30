$(function(){
    var num=0;

    var move=function(){
        $("#da-slider").eq(0).attr("class","da-slide-toleft");
        $("#da-slider").eq(1).attr("class","da-slide-fromright");
        $("#da-slider").eq(2).attr("class","da-slide-toleft");
        num++;
        if(num==$(".da-slide").length-1){
            $("#da-slider").animate({marginLeft:-num*100+"%"},function(){
                $("#da-slider").css({marginLeft:0});
            })
            num=0;
        }else{
            $("#da-slider").animate({marginLeft:-num*100+"%"})
        }
    }
    var t=setInterval(move,2000);
    $(".da-slide").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,2000);
        })



    var num=0;
    var move=function(){
        num++;
        if(num==$(".list").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            })
            num=0;
        }else{
            $(".box").animate({marginLeft:-num*100+"%"})
        }
        $(".circle").css({background:"#ccc",border:"none"});
        $(".circle").eq(num).css({background:"none",border:"1px solid blue"});
    }
    var t=setInterval(move,1000);

    $(".circle").click(function(){
        var index=$(this).index(".circle");
        num=index;
        $(".box").animate({marginLeft:-num*100+"%"});
        $(".circle").css({background:"#ccc",border:"none"});
        $(".circle").eq(num).css({background:"none",border:"1px solid blue"});
    })
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,1000);
    })


})
