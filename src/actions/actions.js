export const searchByGameId = (search) => {
    return {
        type: 'GameId',
        search
    }
}

export const searchByProvider = (search) => {
    return {
        type: 'Provider',
        search
    }
}

export const searchByTpdId = (search) => {
    return {
        type: 'TpdId',
        search
    }
}

export const search = (payload) => {
    return {
        type: 'search',
        payload
    }
}