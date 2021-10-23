$(function(){

    $("#btn").click(clicktoadd);
    $("#todolist").on("click" , "li" , removeMe)
})
function clicktoadd(){
    var newtodo = $("#input").val();
    $("#input").val("");//input wali jgha ko khali kry ga
    alert("This is going to add \""+ newtodo + "\" to the list");
    $("#todolist").append("<li>" + newtodo +  "</li>")
}
function removeMe(){
    // $(this).remove();
    $(this).fadeOut();

}
