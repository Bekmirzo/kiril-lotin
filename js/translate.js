


const input_textarea = document.getElementById('input_textarea');
const output_textarea = document.getElementById('output_textarea');


const switch_kiril_latin = document.getElementById('switch_kiril_latin');
const switch_latin_kiril = document.getElementById('switch_latin_kiril');
const switch_sentence_case = document.getElementById('switch_sentence_case');
const switch_lower_case = document.getElementById('switch_lower_case');
const switch_upper_case = document.getElementById('switch_upper_case');
const switch_capitalized_case = document.getElementById('switch_capitalized_case');


const convert_btn = document.getElementById('convert_btn');
const copy_btn = document.getElementById("copy_btn");


sessionStorage.setItem("status", "kiril-latin");

switch_kiril_latin.onclick = function () {
    switch_kiril_latin.className = 'btn btn-success';
    switch_latin_kiril.className = 'btn btn-outline-secondary';
    switch_lower_case.className = 'btn btn-outline-secondary';
    switch_upper_case.className = 'btn btn-outline-secondary';
    switch_capitalized_case.className = 'btn btn-outline-secondary';
    switch_sentence_case.className = 'btn btn-outline-secondary';
    sessionStorage.setItem("status", "kiril-latin");
    convert_text();
};

switch_latin_kiril.onclick = function () {

    switch_latin_kiril.className = 'btn btn-success';
    switch_kiril_latin.className = 'btn btn-outline-secondary';
    switch_lower_case.className = 'btn btn-outline-secondary';
    switch_upper_case.className = 'btn btn-outline-secondary';
    switch_capitalized_case.className = 'btn btn-outline-secondary';
    switch_sentence_case.className = 'btn btn-outline-secondary';

    sessionStorage.setItem("status", "latin-kiril");
    convert_text();
};

switch_lower_case.onclick = function () {

    switch_lower_case.className = 'btn btn-success';
    switch_latin_kiril.className = 'btn btn-outline-secondary';
    switch_kiril_latin.className = 'btn btn-outline-secondary';
    switch_upper_case.className = 'btn btn-outline-secondary';
    switch_capitalized_case.className = 'btn btn-outline-secondary';
    switch_sentence_case.className = 'btn btn-outline-secondary';

    sessionStorage.setItem("status", "lower-case");
    convert_text();
};

switch_upper_case.onclick = function () {

    switch_upper_case.className = 'btn btn-success';
    switch_latin_kiril.className = 'btn btn-outline-secondary';
    switch_kiril_latin.className = 'btn btn-outline-secondary';
    switch_lower_case.className = 'btn btn-outline-secondary';
    switch_capitalized_case.className = 'btn btn-outline-secondary';
    switch_sentence_case.className = 'btn btn-outline-secondary';

    sessionStorage.setItem("status", "upper-case");
    convert_text();
};

switch_capitalized_case.onclick = function () {

    switch_capitalized_case.className = 'btn btn-success';
    switch_latin_kiril.className = 'btn btn-outline-secondary';
    switch_kiril_latin.className = 'btn btn-outline-secondary';
    switch_lower_case.className = 'btn btn-outline-secondary';
    switch_upper_case.className = 'btn btn-outline-secondary';
    switch_sentence_case.className = 'btn btn-outline-secondary';

    sessionStorage.setItem("status", "capitalized-case");
    convert_text();
};



switch_sentence_case.onclick = function () {

    switch_sentence_case.className = 'btn btn-success';
    switch_latin_kiril.className = 'btn btn-outline-secondary';
    switch_kiril_latin.className = 'btn btn-outline-secondary';
    switch_lower_case.className = 'btn btn-outline-secondary';
    switch_upper_case.className = 'btn btn-outline-secondary';
    switch_capitalized_case.className = 'btn btn-outline-secondary';

    sessionStorage.setItem("status", "sentence-case");
    convert_text();
};





function convert_text() {
    let action = sessionStorage.getItem("status");
    if (action == 'kiril-latin') {
        output_textarea.value = kiril_lotin(input_textarea.value);
    } else if (action == 'latin-kiril') {
        output_textarea.value = lotin_kiril(input_textarea.value);
    } else if (action == 'lower-case') {
        output_textarea.value = input_textarea.value.toLowerCase();
    } else if (action == 'upper-case') {
        output_textarea.value = input_textarea.value.toUpperCase();
    } else if (action == 'sentence-case') {
        output_textarea.value = toMultiSentenceCase(input_textarea.value);
    } else if (action == 'capitalized-case') {
        output_textarea.value = capitalizeWords(input_textarea.value);
    };
    console.log(1)
}

input_textarea.onkeyup = convert_text;

convert_btn.onclick = convert_text;

copy_btn.onclick = function () {
    try {
        copyToClipboard(output_textarea.value);
        showToast('Скопировано!');
    } catch (error) {
        showToast('ошибка!', 'danger');
    }

}


// translate_btn_kl.onclick = () =>{
//     output_textarea.value = kiril_lotin(input_textarea.value);
// };
// translate_btn_lk.onclick = () =>{
//     output_textarea.value = lotin_kiril(input_textarea.value);
// };

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text successfully copied!');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}


function kiril_lotin(input) {

    let output = [];

    let text = input.split('');

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char == ' ') {
            output.push(' ');
        } else if (char == 'қ' || char == 'Қ') {
            char == 'қ' ? output.push('q') : output.push('Q');
        } else if (char == 'ҳ' || char == 'Ҳ') {
            char == 'ҳ' ? output.push('h') : output.push('H');
        } else if (char == 'ў' || char == 'Ў') {
            char == 'ў' ? output.push('o‘') : output.push('O‘');
        } else if (char == 'ғ' || char == 'Ғ') {
            char == 'ғ' ? output.push('g‘') : output.push('G‘');
        } else if (char == 'а' || char == 'А') {
            char == 'а' ? output.push('a') : output.push('A');
        } else if (char == 'б' || char == 'Б') {
            char == 'б' ? output.push('b') : output.push('B');
        } else if (char == 'в' || char == 'В') {
            char == 'в' ? output.push('v') : output.push('V');
        } else if (char == 'г' || char == 'Г') {
            char == 'г' ? output.push('g') : output.push('G');
        } else if (char == 'д' || char == 'Д') {
            char == 'д' ? output.push('d') : output.push('D');
        } else if (char == 'е' || char == 'Е') {
            if (output[i - 1] == ' ') {
                char == 'е' ? output.push('ye') : output.push('Ye');
            } else if (output[i - 1] == 'ʼ') {
                output[i - 1] = '';
                char == 'е' ? output.push('ye') : output.push('Ye');
            } else {
                char == 'е' ? output.push('e') : output.push('E');
            }

        } else if (char == 'ё' || char == 'Ё') {
            char == 'ё' ? output.push('yo') : output.push('Yo');
        } else if (char == 'ж' || char == 'Ж') {
            char == 'ж' ? output.push('j') : output.push('J');
        } else if (char == 'з' || char == 'З') {
            char == 'з' ? output.push('z') : output.push('Z');
        } else if (char == 'и' || char == 'И') {
            char == 'и' ? output.push('i') : output.push('I');
        } else if (char == 'й' || char == 'Й') {
            char == 'й' ? output.push('y') : output.push('Y');
        } else if (char == 'к' || char == 'К') {
            char == 'к' ? output.push('k') : output.push('K');
        } else if (char == 'л' || char == 'Л') {
            char == 'л' ? output.push('l') : output.push('L');
        } else if (char == 'м' || char == 'М') {
            char == 'м' ? output.push('m') : output.push('M');
        } else if (char == 'н' || char == 'Н') {
            char == 'н' ? output.push('n') : output.push('N');
        } else if (char == 'о' || char == 'О') {
            char == 'о' ? output.push('o') : output.push('O');
        } else if (char == 'п' || char == 'П') {
            char == 'п' ? output.push('p') : output.push('P');
        } else if (char == 'р' || char == 'Р') {
            char == 'р' ? output.push('r') : output.push('R');
        } else if (char == 'с' || char == 'С') {
            char == 'с' ? output.push('s') : output.push('S');
        } else if (char == 'т' || char == 'Т') {
            char == 'т' ? output.push('t') : output.push('T');
        } else if (char == 'т' || char == 'Т') {
            char == 'т' ? output.push('t') : output.push('T');
        } else if (char == 'у' || char == 'У') {
            char == 'у' ? output.push('u') : output.push('U');
        } else if (char == 'ф' || char == 'Ф') {
            char == 'ф' ? output.push('f') : output.push('F');
        } else if (char == 'х' || char == 'Х') {
            char == 'х' ? output.push('x') : output.push('X');
        } else if (char == 'ц' || char == 'Ц') {
            char == 'ц' ? output.push('s') : output.push('S');
        } else if (char == 'ч' || char == 'Ч') {
            char == 'ч' ? output.push('ch') : output.push('Ch');
        } else if (char == 'ш' || char == 'Ш') {
            char == 'ш' ? output.push('sh') : output.push('Sh');
        } else if (char == 'щ' || char == 'Щ') {
            char == 'щ' ? output.push('sh') : output.push('Sh');
        } else if (char == 'ъ' || char == 'Ъ') {
            output.push('ʼ');
        } else if (char == 'ь' || char == 'Ь') {
            output.push('');
        } else if (char == 'ы' || char == 'Ы') {
            output.push('');
        } else if (char == 'э' || char == 'Э') {
            char == 'э' ? output.push('e') : output.push('E');
        } else if (char == 'ю' || char == 'Ю') {
            char == 'ю' ? output.push('yu') : output.push('Yu');
        } else if (char == 'я' || char == 'Я') {
            char == 'я' ? output.push('ya') : output.push('Ya');
        } else {
            output.push(char)
        };
    };

    output = output.join('');

    return output;

};

function lotin_kiril(input) {

    let output = [];

    let text = input.split('');

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char == ' ') {
            output.push(' ');
        } else if (char == 'q' || char == 'Q') {
            char == 'q' ? output.push('қ') : output.push('Қ');
        } else if (char == 'h' || char == 'H') {



            if (output[i - 1] == 'с' || output[i - 1] == 'С') {
                output[i - 1] == 'с' ? output.push('ш') : output.push('Ш');
                output[i - 1] = '';
            } else if (output[i - 1] == 'c' || output[i - 1] == 'C') {
                output[i - 1] == 'c' ? output.push('ч') : output.push('Ч');
                output[i - 1] = '';
            } else {
                char == 'h' ? output.push('ҳ') : output.push('Ҳ');
            }
        } else if (char == 'o‘' || char == 'O‘') {
            char == 'o‘' ? output.push('ў') : output.push('Ў');
        } else if (char == 'g‘' || char == 'G‘') {
            char == 'g‘' ? output.push('ғ') : output.push('Ғ');
        } else if (char == 'a' || char == 'A') {


            if (output[i - 1] == 'й' || output[i - 1] == 'Й') {
                output[i - 1] == 'й' ? output.push('я') : output.push('Я');
                output[i - 1] = '';
            } else {
                char == 'a' ? output.push('а') : output.push('А');
            }
        } else if (char == 'b' || char == 'B') {
            char == 'b' ? output.push('б') : output.push('Б');
        } else if (char == 'v' || char == 'V') {
            char == 'v' ? output.push('в') : output.push('В');
        } else if (char == 'g' || char == 'G') {
            char == 'g' ? output.push('г') : output.push('Г');
        } else if (char == 'd' || char == 'D') {
            char == 'd' ? output.push('д') : output.push('Д');
        } else if (char == 'e' || char == 'E') {
            char == 'e' ? output.push('е') : output.push('Е');
        } else if (char == 'j' || char == 'J') {
            char == 'j' ? output.push('ж') : output.push('Ж');
        } else if (char == 'z' || char == 'Z') {
            char == 'z' ? output.push('з') : output.push('З');
        } else if (char == 'i' || char == 'I') {
            char == 'i' ? output.push('и') : output.push('И');
        } else if (char == 'y' || char == 'Y') {
            char == 'y' ? output.push('й') : output.push('Й');
        } else if (char == 'k' || char == 'K') {
            char == 'k' ? output.push('к') : output.push('К');
        } else if (char == 'l' || char == 'L') {
            char == 'l' ? output.push('л') : output.push('Л');
        } else if (char == 'm' || char == 'M') {
            char == 'm' ? output.push('м') : output.push('М');
        } else if (char == 'n' || char == 'N') {
            char == 'n' ? output.push('н') : output.push('Н');
        } else if (char == 'o' || char == 'O') {

            if (output[i - 1] == 'й' || output[i - 1] == 'Й') {
                output[i - 1] == 'й' ? output.push('ё') : output.push('Ё');
                output[i - 1] = '';
            } else {
                char == 'o' ? output.push('о') : output.push('О');
            }
        } else if (char == 'p' || char == 'P') {
            char == 'p' ? output.push('п') : output.push('П');
        } else if (char == 'r' || char == 'R') {
            char == 'r' ? output.push('р') : output.push('Р');
        } else if (char == 's' || char == 'S') {
            char == 's' ? output.push('с') : output.push('С');



        } else if (char == 't' || char == 'T') {
            char == 't' ? output.push('т') : output.push('Т');
        } else if (char == 'u' || char == 'U') {


            if (output[i - 1] == 'й' || output[i - 1] == 'Й') {
                output[i - 1] == 'й' ? output.push('ю') : output.push('Ю');
                output[i - 1] = '';
            } else {
                char == 'u' ? output.push('у') : output.push('У');
            }

        } else if (char == 'f' || char == 'F') {
            char == 'f' ? output.push('ф') : output.push('Ф');
        } else if (char == 'x' || char == 'X') {
            char == 'x' ? output.push('х') : output.push('Х');
        } else if (char == 'ʼ' || char == `'` || char == `‘`) {

            if (output[i - 1] == 'г' || output[i - 1] == 'Г') {
                output[i - 1] == 'г' ? output.push('ғ') : output.push('Ғ');
                output[i - 1] = '';

            } else if (output[i - 1] == 'о' || output[i - 1] == 'О') {
                output[i - 1] == 'о' ? output.push('ў') : output.push('Ў');
                output[i - 1] = '';
            } else {

                output.push('ъ');

            }

        } else {
            output.push(char)
        };
    };

    output = output.join('');

    return output;

};

function toMultiSentenceCase(str) {
    return str
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, match => match.toUpperCase());
};


function capitalizeWords(text) {
    return text
        .split(' ')
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
};


function showToast(message, type = 'success') {
    const toastEl = document.createElement('div');

    const classes = {
        success: 'bg-success text-white',
        danger: 'bg-danger text-white',
        warning: 'bg-warning text-dark',
        info: 'bg-info text-dark'
    };

    toastEl.className = `toast ${classes[type]}`;

    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button"
                    class="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"></button>
        </div>
    `;

    document.getElementById('toastContainer').appendChild(toastEl);

    const toast = new bootstrap.Toast(toastEl, {
        delay: 2000
    });

    toast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
    });
}
