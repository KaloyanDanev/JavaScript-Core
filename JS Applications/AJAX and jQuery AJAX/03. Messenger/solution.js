function attachEvents(){
    const baseUrl = "https://fir-e061f.firebaseio.com/messages.json";
    $("#submit").click(submitMessage);
    $("#refresh").click(reloadPage);

    function submitMessage() {
        let author = $("#author").val();
        let content = $("#content").val();
        let timestamp = Date.now();
        let message = {
            author,
            content,
            timestamp,
        }

        $.ajax({
            url:baseUrl,
            method:"POST",
            data:JSON.stringify(message),
            success:logResponse
        })

        function logResponse(msg) {
            console.log(msg);
        }
        

        }
    function reloadPage(){
        $.ajax({
            url:baseUrl,
            method:"GET",
            success:loadMessages
        })
        function loadMessages(data) {
            let allMessages = "";
            for (let message of Object.values(data)){
                allMessages = `${message.author}: ${message.content}\n`;
            }
            $("#messages").text(allMessages);
        }
    }
}