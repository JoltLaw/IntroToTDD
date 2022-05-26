function getNewId(min, max, ids = []) {
    let id;
    do {
       id = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (ids.indexOf(id) > -1);
    return id;
}

function getRandomId(min = 0, max = 0, ids = []) {
    let id;
    let a = [];
    do {
       id = Math.floor(Math.random() * (max - min + 1)) + min;
       if (a.indexOf(id) === -1) {
          a.push(id);
       }
       if (a.length === max - min + 1) {
          if (ids.indexOf(id) > -1) {
             return 'failed';
          }
       }
    } while (ids.indexOf(id) > -1);
    return id;
}


test("Jest is working", () => {
    expect(1).toBe(1);
})

it("Returns Random number", () => {
    jest.spyOn(Math, 'floor');
    const mockMath = Object.create(global.Math);
    const originalMath = Object.create(global.Math);
    mockMath.random = () => 0.75;
    global.Math = mockMath;
    const id = getNewId(10, 100);
    expect(id).toBe(78);
    global.Math = originalMath;
})

it("Return an integer", () => {
    const id = getRandomId();
    expect(id).toBe(Math.floor(id));
})

it("generates a number with in a specified range", () => {
    const min = 10;
    const max = 100;
    const range = [];
    for (let i = min; i < max+1; i++) {
    range.push(i);
    }
    for(let i = 0; i < 100; i++){
        const id = getRandomId(min, max);
        expect(range).toContain(id);
    }
})

test('generates a unique number', () => {
    mockIds = [1, 2, 3, 4, 5];
    let id = getRandomId(1, 5, mockIds);
    expect(id).toBe('failed');

    id = getRandomId(1, 6, mockIds);
    expect(id).toBe(6);
 });
