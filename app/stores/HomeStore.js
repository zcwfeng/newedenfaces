/**
 * Created by zcw on 2016/12/30.
 */
import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
    constructor() {
        this.bindActions(HomeActions);
        this.characters = [];
    }

    onGetTwoCharactersSuccess(data) {
        this.characters = data;
    }

    onGetTwoCharactersFail(errorMessage) {
        toastr.error(errorMessage);
    }

    onVoteFail(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(HomeStore);