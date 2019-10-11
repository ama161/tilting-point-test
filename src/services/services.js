import { search } from "../actions/actions";

const ROUTE = 'http://react-test-backend.us-east-1.elasticbeanstalk.com/analytics-events';

const headers = new Headers({
    'Content-Type': 'application/json'
});

/**
 * method to search an event by its id
 * @param {number} id 
 */
export function getById(id){
    const route = `${ROUTE}/${id}`;
    const request = new Request(route, {
        method: 'GET',
        headers: headers
    });

    return new Promise((resolve) => {
        fetch(request)
            .then((response) => {
                console.log(response);
                if(!response.ok) {
                    throw response.json();
                }
                return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
        });
}

/**
 * method to search an event by filters (gameId, provider, tpdId)
 * @param {string} gameId 
 * @param {string} provider 
 * @param {string} tpdId 
 */
export function getByFilter(gameId, provider, tpdId){
    const route = `${ROUTE}?gameId=${gameId}&provider=${provider}&tpdid=${tpdId}&limit=15&skip=0`;
    const request = new Request(route, {
        method: 'GET',
        headers: headers
    });

    return new Promise((resolve) => {
        fetch(request)
            .then((response) => {
                if(!response.ok) {
                    throw response.json();
                }
                return response.json();
                })
                .then((data) => {
                    resolve(data);
                })
        });
}

/**
 * method to get a search with the filters and sorted by createdAt
 * @param {string} gameId 
 * @param {string} provider 
 * @param {string} tpdId 
 */
export function getSearch(gameId, provider, tpdId) {
    return (dispatch) => {
        getByFilter(gameId, provider, tpdId)
        .then(data => {
            const dataSorted = data.data.sort((a, b) => new Date(b.createdAt) < new Date(a.createdAt) ? 1 : -1)
            dispatch(search(dataSorted))
        })
    }
}