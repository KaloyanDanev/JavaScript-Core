function attachEvents(){
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_BkGnn4AF4';
    const endpoint = 'biggestCatches';
    const username = 'kalata';
    const password = '123456';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    };

    $('.load').click(loadCatches);

    async function loadCatches(){
        let catches = await $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/' + endpoint,
            method:'GET',
            headers
        });
        for(let catchInfo of catches){
            let div = $(`
             <div class="catch" data-id="${catchInfo._id}">
            <label>Angler</label>
            <input type="text" class="angler" value="${catchInfo.angler}"/>
            <label>Weight</label>
            <input type="number" class="weight" value="${catchInfo.weight}"/>
            <label>Species</label>
            <input type="text" class="species" value="${catchInfo.species}"/>
            <label>Location</label>
            <input type="text" class="location" value="${catchInfo.location}"/>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchInfo.bait}"/>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchInfo.captureTime}"/>
        </div>`);
            let updateBtn = $(`<button class="update">Update</button>`);
            updateBtn.click(updateCatch);
            let deleteBtn = $(`<button class="delete">Delete</button>`);
            deleteBtn.click(deleteCatch);

            div.append(updateBtn);
            div.append(deleteBtn);

            $('#catches').append(div);
        }
    }
    function updateCatch() {
        
    }
    
    function deleteCatch() {
        
    }
}