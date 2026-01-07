const solution = require('./solution');

test('works for complete week', () => {
    const input = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2
    };

    const output = solution(input);
    expect(output.Mon).toBe(-6);
    expect(output.Sat).toBe(8);
    expect(output.Sun).toBe(2);
});

test('fills missing days with mean', () => {
    const input = {
        '2020-01-01': 6,
        '2020-01-04': 12,
        '2020-01-05': 14,
        '2020-01-06': 2,
        '2020-01-07': 4
    };

    const output = solution(input);
    expect(output.Thu).toBe(8);
    expect(output.Fri).toBe(10);
});
