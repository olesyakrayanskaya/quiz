function fetch(url, params) {
    return new Promise((resolve) => {
        console.log(url);
        console.log(params.body);
        resolve('done');
    });
}

export default fetch;
