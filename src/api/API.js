export const fetchingData = async() => {
    fetch('https://young-caverns-57308.herokuapp.com/')
    const response = await response.json()
    return {result}
}
