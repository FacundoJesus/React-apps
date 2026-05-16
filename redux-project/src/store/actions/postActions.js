
// 3 acciones

// Obtener el post
export const fetchPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST",
})

// Éxito
export const fetchPostsSuccess = (posts) => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
})

// Fracaso
export const fetchPostsFailure = (error) => ({
    type: "FETCH_POSTS_FAILURE",
    payload: error,
})


export const fetchPosts = () => async (dispatch) => {

    // Despachar el post -> Loading...
    dispatch(fetchPostsRequest());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Despachar el post en éxito.
        dispatch(fetchPostsSuccess(data));
    }
    catch(error) {
        // Despachar el post en fracaso.
        dispatch(fetchPostsFailure(error.message));
    }

} 