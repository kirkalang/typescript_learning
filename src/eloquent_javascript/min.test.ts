import { min } from './min';

it.each([[1,2], [0,1], [-1, 0], [-1,1], [-2, -1], [-100, 100]])('min returns first param %i that is less than second param %i', (p1, p2) => {
    expect(min(p1, p2)).toEqual(p1);
})

it.each([[2,1], [1,0], [0, -1], [1,-1], [-1, -2], [100, -100]])('min returns second param when it is less than first (%i, %i)', (p1, p2) => {
    expect(min(p1, p2)).toEqual(p2);
})

it.each([1, 0, -1, 2, -2, 100, -100])('min returns %i when both params are equal', (p1) => {
    expect(min(p1, p1)).toEqual(p1);
})

it.each([[1.0,2.0], [0.0,1.0], [-1.0, 0.0], [1.1,1.2], [-1.1, -1.0]])('min works with floating point numbers. (%f, %f)', (p1, p2) => {
    expect(min(p1, p2)).toEqual(p1);
})
