import {
    Node,
    ReturnValue
} from 'genericrunner';

export default class Console extends Node {

    static type = 'example';

    out = 0;

    async exec(param) {
        super.exec(param);
        console.log('example');
        return new ReturnValue(0, null, this);
    }
}
