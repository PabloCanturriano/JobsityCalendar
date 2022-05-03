export function groupBy(collection,key){
    return collection.reduce((previous, current) => {
        if (!previous[current[key]]) {
            previous[current[key]] = [];
        }
        previous[current[key]].push(current);
        return previous;
    }, {})
}

