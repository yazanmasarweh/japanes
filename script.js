$(".changeLatter").click(function (e) { 
    e.preventDefault();
    $(".showLatter").hide();
    // console.log( Math.round(numLatter) );

    $.ajax({
        url: "./latter.json",
        dataType: "JSON",
        async:true,
        beforeSend: function (){
          
        },
        success: function(d){
            let longArray = d["latters"].length;
            let numLatter = Math.floor((Math.random() * longArray));

            let LinkImg = d["latters"][numLatter].link;
            let latter = d["latters"][numLatter].latter;
            
            $(".img-main img").attr("src", LinkImg );
            $(".showLatter").text(latter);
        }
    });

});

$(".showHideLatter").click(function(){
    $(".showLatter").toggle();
})
