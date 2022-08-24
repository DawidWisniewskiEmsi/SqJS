let value             = 0;
const minusElement      = document.querySelector("#minus");
const plusElement       = document.querySelector("#plus");
/**
 * @type {HTMLInputElement|null}
 */
const inputElement      = document.querySelector("input[type=text]");

minusElement?.addEventListener('click',function handleMinusClick(){
    value  =   value - 1;
    displayValue(value);
});

plusElement?.addEventListener('click',function handlePlusClick(){
    value  =   value + 1;
    displayValue(value);
    
});
function displayValue(value) {
    if (inputElement != null) {
        inputElement.value = String(value);
    }
}

displayValue(value);

