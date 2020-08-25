import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        // When the property is the same as its value (e.g. campsiteId: campsiteId), you can pass it like this:
        campsiteId,
        rating,
        author,
        text 
    }
})