$(function(){
    $("#load").click(function(){
        $.get("students.txt",function(recieve){
            $("#output_container").empty()
            $("#output_container").append(recieve)
        })
    })
})