function loadModels(models) {
    models.forEach(elm => {
        if (!elm['img'])
            return;

        const col = `<img alt class="img-fluid" src="${elm['img']}">`;
        $('#model-list').append($(col))
    });

    const scene = `<inline url="${models[1]['path']}"> </inline>`;
    $('#model-scene').append($(scene));
}

$.ajax({
    type: "GET",
    contentType: "application/json;charset=UTF-8",
    url : "/models.php",
    success : function(result) {
        loadModels(result);
    },
    error : function(e){
        console.log(e.status);
        console.log(e.responseText);
    }
});