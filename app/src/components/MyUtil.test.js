import { getTriangleArea } from './MyUtil';

describe('getTriangleArea', () => {
    // テストケース実行前に実行される処理(初期化など)
    beforeEach(() => {
        console.log(new Date().toLocaleTimeString());
    });

    test('正常パターン',() => {
        expect(getTriangleArea(10, 2)).toBe(10);
    });

    // テストケース実行後に実行される処理(後処理など)
    // afterEach(() => {
    //     console.log(new Date().toLocaleTimeString());
    // });
});