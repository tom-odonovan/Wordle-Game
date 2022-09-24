let keys = document.getElementsByClassName('key');
let rowIndex = 1;

window.addEventListener('keyup', console.log);

for (let keyElement of keys) {
    let key = keyElement.textContent;
    keyElement.addEventListener('click', function () {
        switch (key) {
            case 'enter':
        
                break;
            case 'backspace':
                
                break;
            default:
                console.log(key);
                let tile = document.getElementById(rowIndex);
                tile.innerText = key;
                rowIndex++;
                tile.style.border = '3px solid black';
        }
    });
}
