function getInfo() {
    const baseUrl = "https://judgetests.firebaseio.com/businfo/";
   let busId = $("#stopId").val();
   $.ajax({
       url:baseUrl + busId + ".json",
       method:'GET',
       success:logData,
       error:handleError
   })

    function logData(data) {
        $("#stopName").text(data.name);
        console.log(data.buses);
        for (let [key, value] of Object.entries(data.buses)) {
            $("#buses").append(`<li>Bus ${key} arrives in ${value} minutes</li>`)
        }
    }
    function handleError(error){
        $("#stopName").text("Error");
    }
}