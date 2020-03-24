$(document).ready(function() {
    $(".circularProgress").each(function(index, cProgress){
        var progressPersentage = parseInt($(cProgress).attr("data-progress"));
        $(cProgress).css({
            "background-image":
                "conic-gradient(#dda908 " +
                progressPersentage +
                "%, #0b090c " +
                progressPersentage +
                "%)"
        })
    });
})