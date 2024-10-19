document.getElementById('convertBtn').addEventListener('click', function () {
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (unitFrom === 'bits') {
        if (unitTo === 'Bytes') result = inputValue / (8);
        else if (unitTo === 'KiloBytes') result = inputValue / (8 * 1024);
        else if (unitTo === 'MegaBytes') result = inputValue / (8 * 1024 * 1024);
        else result = inputValue;
    } else if (unitFrom === 'Bytes') {
        if (unitTo === 'bits') result = inputValue * (8);
        else if (unitTo === 'KiloBytes') result = inputValue / (1024);
        else if (unitTo === 'MegaBytes') result = inputValue / (1024 * 1024);
        else result = inputValue;
    } else if (unitFrom === 'KiloBytes') {
        if (unitTo === 'bits') result = inputValue * (8 * 1024);
        else if (unitTo === 'Bytes') result = inputValue * (1024);
        else if (unitTo === 'MegaBytes') result = inputValue / (1024);
        else result = inputValue;
    } else if (unitFrom === 'MegaBytes') {
        if (unitTo === 'bits') result = inputValue * (8 * 1024 * 1024);
        else if (unitTo === 'Bytes') result = inputValue * (1024 * 1024);
        else if (unitTo === 'KiloBytes') result = inputValue * (1024);
        else result = inputValue;
    }

document.getElementById('result').innerText = "Result: " + result + " " + unitTo;
});