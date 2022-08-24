import store from '../store';


class updateUtils {
    checkIfLoggedIn() {
        console.log(store)
        return this.$store.user.isLoggedIn;
    }
}

const utils = new updateUtils();

export default utils