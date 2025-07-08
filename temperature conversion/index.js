const inputbox = document.getElementById(`inputbox`);
const ctof = document.getElementById('ctof');
const ftoc = document.getElementById('ftoc');
const change = document.getElementById(`change`)
let changedvalue=0;

change.onclick = function(){
    const inputValue = parseFloat(inputbox.value);
    if(ctof.checked){
        changedvalue = (inputValue*(9/5))+32
        document.getElementById(`thetext`).textContent = `${changedvalue.toFixed(2)}'F`;
    }else if(ftoc.checked){
        changedvalue = (inputValue-32)*(5/9)
        document.getElementById(`thetext`).textContent = `${changedvalue.toFixed(2)}'C`;
    }
}
