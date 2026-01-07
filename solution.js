function solution(D) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const result = {
        Mon: null, Tue: null, Wed: null,
        Thu: null, Fri: null, Sat: null, Sun: null
    };

    for (const date in D) {
        const dayName = days[new Date(date).getDay()];
        result[dayName] = (result[dayName] || 0) + D[date];
    }

    const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    for (let i = 0; i < dayOrder.length; i++) {
        const day = dayOrder[i];
        if (result[day] === null) {
            let prev = i - 1;
            let next = i + 1;

            while (result[dayOrder[prev]] === null) prev--;
            while (result[dayOrder[next]] === null) next++;

            result[day] = Math.floor(
                (result[dayOrder[prev]] + result[dayOrder[next]]) / 2
            );
        }
    }

    return result;
}

module.exports = solution;
