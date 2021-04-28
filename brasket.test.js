const brusket = require('./brasket');

test('[]=>true', () => {
	expect(brusket('[]')).toBe(true);
});
test('[[[]]]=>true', () => {
	expect(brusket('[[[]]]')).toBe(true);
});
test('{[()]}=>true', () => {
	expect(brusket('{[()]}')).toBe(true);
});
test('[{}()()]=>true', () => {
	expect(brusket('[{}()()]')).toBe(true);
});
test('[{(}()()]=>false', () => {
	expect(brusket('[{(}()()]')).toBe(false);
});
test('[{(})()()]=>false', () => {
	expect(brusket('[{(})()()]')).toBe(false);
});
test('[(])=>false', () => {
	expect(brusket('[(])')).toBe(false);
});
test('[(]))=>false', () => {
	expect(brusket('[(]))')).toBe(false);
});
test('(({{})=>false', () => {
	expect(brusket('(({{})')).toBe(false);
});
test('(({{})=>false', () => {
	expect(brusket('(({{})')).toBe(false);
});
test('((((((((({{{{{{{{[[[[[[[]]]]]]]}}}}}}}})))))))))=>true', () => {
	expect(brusket('((((((((({{{{{{{{[[[[[[[]]]]]]]}}}}}}}})))))))))')).toBe(true);
});
