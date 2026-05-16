
// 3 acciones

// Obtener el post
export const fecthPostRequest = () => ({
    type: "FETCH_POST_REQUEST",
})

// Éxito
export const fecthPostSuccess = (posts) => ({
    type: "FETCH_POST_SUCCESS",
    payload: posts,
})

// Fracaso
export const fecthPostFailure = (error) => ({
    type: "FETCH_POST_FAILURE",
    payload: error,
})


export default fetchPosts = () => async (dispatch) => {

    // Despachar el post -> Gestionar la carga
    dispatch(fecthPostRequest());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Despachar el post en éxito.
        dispatch(fecthPostSuccess(data));
    }
    catch(error) {
        // Despachar el post en fracaso.
        dispatch(fecthPostFailure(error.message));
    }

} 