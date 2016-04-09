/**
 * @flow
 */
import expect from 'expect';
import {_$_, _0_} from './meta-constant';

describe('meta constants', () => {
    describe('_$_', () => {
        it('should provide identical and equal value if called with same text', () => {
            const meta1 = _$_`identicalTest`;
            const meta2 = _$_`identicalTest`;
            expect(meta1).toBe(meta2);
            expect(meta1).toEqual(meta2);
        });

        it('should be unequal if different name used', () => {
            const meta1 = _$_`diffTest`;
            const meta2 = _$_`anotherName`;
            expect(meta1).toNotBe(meta2);
            expect(meta1).toNotEqual(meta2);
        });

        it('should unequal to all primitive types', () => {
            const meta = _$_`test`;
            expect(meta).toNotBe(42);
            expect(meta).toNotBe('test');
            expect(meta).toNotBe(function test() {
            });
        });

        it('should project to same meta constant if empty string used', () => {
            const meta1 = _$_``;
            const meta2 = _$_``;
            expect(meta1).toBe(meta2);
        });

        it('should project to same meta constant for all whitespace strings', () => {
            const meta1 = _$_` \t`;
            const meta2 = _$_``;
            expect(meta1).toBe(meta2);
        });
    });

    describe('_0_ shortcut', () => {
        it('should be identical to itself', () => {
            expect(_0_).toBe(_0_);
        });

        it('should not be identical to other constant', () => {
            expect(_0_).toNotBe(_$_`other`);
        });

        it('should be identical ot the empty _$_', () => {
            console.log(_0_.toString());
            expect(_0_).toBe(_$_` `);
        });
    });
});
