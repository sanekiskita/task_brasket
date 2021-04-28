const brusket = require('./brasket');

test('[]', () => {
	expect(brusket('[]')).toBe(true);
});
test('[[[]]]', () => {
	expect(brusket('[[[]]]')).toBe(true);
});
test('{[()]}', () => {
	expect(brusket('[[[]]]')).toBe(true);
});
test('[{}()()]', () => {
	expect(brusket('[{}()()]')).toBe(true);
});
test('[{(}()()]', () => {
	expect(brusket('[{(}()()]')).toBe(false);
});
test('[{(})()()]', () => {
	expect(brusket('[{(})()()]')).toBe(false);
});
test('[(])', () => {
	expect(brusket('[(])')).toBe(false);
});
test('[(]))', () => {
	expect(brusket('[(]))')).toBe(false);
});
test('(({{})', () => {
	expect(brusket('(({{})')).toBe(false);
});
test('(({{})', () => {
	expect(brusket('(({{})')).toBe(false);
});
test('((((((((({{{{{{{{[[[[[[[]]]]]]]}}}}}}}})))))))))', () => {
	expect(brusket('((((((((({{{{{{{{[[[[[[[]]]]]]]}}}}}}}})))))))))')).toBe(true);
});
