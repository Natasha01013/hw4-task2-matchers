import {playerHealth} from "../playerhealth.js";

test("sort players", () => {
    const array = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];

    let heroes = playerHealth([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]);


    expect(heroes).toEqual(array);
})