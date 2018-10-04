module.exports.createRefObj = (data, docs, key, doc_key) => {
    return data.reduce((data, datum, i) => {
        data[datum[key]] = docs[i][doc_key];
        return data;
    }, {});
}

module.exports.formatAreaData = (areasData, cityRefs) => {
    return areasData.map(areaDatum => {
        const city = cityRefs[areaDatum.city];
        return {...areaDatum, city};
    });
}
