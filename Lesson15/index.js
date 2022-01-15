const promise = fetch('https://5d9969125641430014051850.mockapi.io/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: '',
    })
    .then(onSuucess)
    .then(onFinish)

console.log( promise );

function onSuucess(response) {
    const result = response.json();

    console.log( response );
    console.log( result );

    return result;
}

function onFinish(info) {
    console.log(info);
}
