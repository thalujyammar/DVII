var vg_1 = "x.vg.json";
var vg_2 = "ps5.vg.json";
var vg_3 = "nin.vg.json";
var vg_4 = "steam.vg.json";

vegaEmbed("#dv1", vg_1).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);

vegaEmbed("#dv2", vg_2).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);

vegaEmbed("#dv3", vg_3).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);

vegaEmbed("#dv4", vg_4).then(function(result) {
    ("https://vega.github.io/vega/docs/api/view/")

}).catch(console.error);



$('.vis').on('change', function () {
    var res = $(this).val()
    if(res == "0"){
        $(".dv1").show();
        $(".dv2").hide();
        $(".dv3").hide();
        $(".dv4").hide();
    } else if(res == "1"){
        $(".dv1").hide();
        $(".dv2").show();
        $(".dv3").hide();
        $(".dv4").hide();
    } else if(res == "2"){
        $(".dv1").hide();
        $(".dv2").hide();
        $(".dv3").show();
        $(".dv4").hide();
    }else if(res == "3"){
        $(".dv1").hide();
        $(".dv2").hide();
        $(".dv3").hide();
        $(".dv4").show();
    }
});
