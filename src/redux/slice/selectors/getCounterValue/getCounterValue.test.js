import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('test initial value', () => {
        expect(getCounterValue()).toBe(0);
    });

    test('test counter value', () => {
        expect(
            getCounterValue({
                counter: {
                    value: 100,
                },
            })
        ).toBe(100);
    });
});
