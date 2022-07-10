const ajax = document.querySelector('.ajax > .row');
const _fetch = document.querySelector('.fetch > .row');

$.ajax({
    url: 'https://reqres.in/api/users/',
    type: 'GET',
})
    .done((data) => {
        data = data.data;
        ajax.innerHTML = data
            .map((item) => {
                return `
                <div>
                    <img src="${item.avatar}">
                    <div>
                        <p>${item.first_name} ${item.last_name}</p>
                        <p>${item.email}</p>
                    </div>
                </div>`;
            })
            .join('');
    })

fetch('https://reqres.in/api/users?page=2')
    .then((res) => res.json())
    .then((data) => {
        data = data.data;
        _fetch.innerHTML = data
            .map((item) => {
                return `
                <div>
                    <img src="${item.avatar}" >
                    <div>
                        <p>${item.first_name} ${item.last_name}</p>
                        <p>${item.email}</p>
                    </div>
                </div>`;
            })
            .join('');
    }); 