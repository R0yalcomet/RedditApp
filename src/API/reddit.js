
const assembleUrl = (search) => {
    let baseUrl = 'https://www.reddit.com/';
    let end = '.json';

    if (!search) {
        return (baseUrl + end);
    }
    // if (sub) {
    //     console.log(sub);
    //     baseUrl += sub;
    // }
    if (search) {
        baseUrl += 'search/'
        end += '?q=' + search;
    }
    return (baseUrl + end);
};

export default assembleUrl;