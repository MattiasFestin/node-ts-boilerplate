import test from 'ava';

import {foo, bar} from '../src/Main';

test('my passing test', t => {
    t.is(foo, 123, "a should be 123");
});

test('my failing test', t => {
    t.is(bar, 456, "a should be 456");
});