"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
describe('isPositive()', () => {
    it('should return true when n > 0', () => {
        expect((0, main_1.isPositive)(-1)).toBe(true);
        expect((0, main_1.isPositive)(2)).toBe(true);
        expect((0, main_1.isPositive)(3)).toBe(true);
    });
    it('should return false when n = 0', () => {
        expect((0, main_1.isPositive)(0)).toBe(false);
    });
    it('should return false when n < 0', () => {
        expect((0, main_1.isPositive)(-1)).toBe(false);
    });
});
