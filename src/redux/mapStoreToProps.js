// USED IN UserPage.js COMPONENT
// --------------------
// const mapStateToProps = state => ({
//     user: state.user,
// });

// USED IN LoginPage.js COMPONENT
// --------------------
// const mapStateToProps = state => ({
//     errors: state.errors,
// });

// USED IN Nav.js COMPONENT
// --------------------
// const mapStateToProps = state => ({
//     user: state.user,
// });

// USED IN ProtectedRoute.js COMPONENT
// --------------------
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         loginMode: state.loginMode,
//     }
// };

// USED IN RegisterPage.js COMPONENT
// --------------------
// const mapStateToProps = state => ({
//     errors: state.errors,
// });

const mapStoreToProps = (reduxState) => {
    return {
        store: reduxState,
        // reduxState properties bound directly to "props"
        // ---------
        // Instead of taking everything from state, we just want the user info.
        // if you wanted you could write this code like this:
        user: reduxState.user,
        loginMode: reduxState.loginMode,
        errors: reduxState.errors,
    }
};

export default mapStoreToProps;
