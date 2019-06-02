(() => {
    const url = window.location.href.split(/\d+.md/)[0];
    Array(10)
        .fill(undefined)
        .forEach((_, ix) => {
            window.open(url + ix + '.md');
        });
})();
