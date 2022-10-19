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



$('#vis').on('change', function () {
    if(this.value === "ps5"){
        $("#dv1").show();
        $("#dv2").hide();
        $("#dv3").hide();
        $("#dv4").hide();
    } else if(this.value === "xbox"){
        $("#dv1").hide();
        $("#dv2").show();
        $("#dv2").hide();
        $("#dv2").hide();
    } else if(this.value === "nin"){
        $("#dv1").hide();
        $("#dv2").hide();
        $("#dv2").show();
        $("#dv2").hide();
    }else if(this.value === "steam"){
        $("#dv1").hide();
        $("#dv2").hide();
        $("#dv2").hide();
        $("#dv2").show();
    }else {
        $("#dv1").show();
        $("#dv2").hide();
        $("#dv3").hide();
        $("#dv4").hide();
    }
});
