import {Component} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';
import {Parties} from '../../../collections/parties.ts';

@Component({
    selector: 'party-details',
    templateUrl: '/client/imports/party-details/party-details.html',
    directives: [RouterLink]
})
export class PartyDetails {
    party: Object;

    constructor(params: RouteParams) {
        var partyId = params.get('partyId');
        this.party = Parties.findOne(partyId);
    }

    saveParty(party) {
        console.dir(party)
        Parties.update(party._id, party)
    }
}