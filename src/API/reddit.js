const assembleUrl = (searchParams) => {
    const {searchTerm, subName} = searchParams

    let baseUrl = 'https://www.reddit.com/';
    let end = '.json';

    if (!searchTerm && !subName) {
        //unedited url to return default feed
        return (baseUrl + end);
    }
    
    if (subName) {
        //edit url to return posts from chosen subreddit
        baseUrl += subName + '/';
    }
    if (searchTerm) {
        //edit url to return posts matching a search term
        baseUrl += 'search/'
        end += '?q=' + searchTerm;
    }

    //Reddit json won't respond to both a subreddit filter and a search term at the same time
    //Reddit will prioritize search term over subreddit

    return (baseUrl + end);
};

export default assembleUrl;