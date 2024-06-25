

const assembleUrl = (searchParams) => {
    const {searchTerm, subName} = searchParams

    let baseUrl = 'https://www.reddit.com/';
    let end = '.json';

    if (!searchTerm && !subName) {
        return (baseUrl + end);
    }
    
    if (subName) {
        console.log(subName);
        baseUrl += subName + '/';
    }
    if (searchTerm) {
        baseUrl += 'search/'
        end += '?q=' + searchTerm;
    }

    //Reddit json won't respond to both a subreddit filter and a search term at the same time

    return (baseUrl + end);
};

export default assembleUrl;