/**
 * Created by zcw on 2016/12/30.
 */
import alt from '../alt';

class StatsActions {
    constructor() {
        this.generateActions(
            'getStatsSuccess',
            'getStatsFail'
        );
    }

    getStats() {
        $.ajax({ url: '/api/stats' })
            .done((data) => {
                this.actions.getStatsSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getStatsFail(jqXhr);
            });
    }
}

export default alt.createActions(StatsActions);