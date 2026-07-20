class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        for (let car = 0; car < position.length; car++) {
            let pos = position[car];
            let s = speed[car];

            cars.push([pos, (target - pos) / s]);
        }
        cars.sort((a, b) => a[0] - b[0]);
        let fleet = [];


        for (let car = cars.length - 1; car >= 0; car--) {
            if (!fleet.length || cars[car][1] > fleet[fleet.length - 1][1]) fleet.push(cars[car]);
        }
        return fleet.length;
    }
}
