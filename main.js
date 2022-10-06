var array = [6, 2, 3, 1, 7, 4, 8, 5]

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    }, 1000)
}

// сортровка вставкой - лучший выбор сортировки для массивов малой размерности
// принято решение "испортить" исходный массив, чтобы не менять логику DrawArray()
function insertionSort() {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let current = array[i];
        let j = i - 1;
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
}

// сортировка массива array с последующей отрисовкой
function drawSortedArray() {
    insertionSort();
    DrawArray();
}
