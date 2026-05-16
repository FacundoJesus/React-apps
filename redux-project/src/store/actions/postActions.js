
// 3 acciones

// Obtener el post
export const fecthPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST",
})

// Éxito
export const fecthPostsSuccess = (posts) => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
})

// Fracaso
export const fecthPostsFailure = (error) => ({
    type: "FETCH_POSTS_FAILURE",
    payload: error,
})


export const fetchPosts = () => async (dispatch) => {

    // Despachar el post -> Gestionar la carga
    dispatch(fecthPostsRequest());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Despachar el post en éxito.
        dispatch(fecthPostsSuccess(data));
    }
    catch(error) {
        // Despachar el post en fracaso.
        dispatch(fecthPostsFailure(error.message));
    }

} 