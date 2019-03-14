function addItem() {
    let newItemText = $('#newItemText');
    let newItemValue = $('#newItemValue');
    let $select = $('#menu');
    let $option = $(`<option value="${newItemValue.val()}">${newItemText.val()}</option>`);

    $select.append($option);
    newItemText.val('');
    newItemValue.val('');
}
