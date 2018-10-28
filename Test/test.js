QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing findgrad function with several sets of inputs', function (assert) {
    assert.equal(findgrad('A'), 4, 'Tested with high grade and the result will be 4');
    assert.equal(findgrad('B'), 3, 'Tested with second grade and the result will be 3 ');
    assert.equal(findgrad('C'), 2, 'Tested with third grade and the result will be 2');
    assert.equal(findgrad('F'), 0, 'Tested with least grade and the result will be 0');
});
QUnit.test('Testing sum function with several sets of inputs', function (assert) {
    assert.equal(sum(4,4,4), 4, 'Tested with 3 different grades and the result will be 4');
    assert.equal(sum(4,3,4), 3.67, 'Tested with 3 different grades and the result will be 3.67 ');
    assert.equal(sum(3,3,3), 3, 'Tested with 3 different grades and the result will be 3');
    assert.equal(sum(3,0,0), 1, 'Tested with 3 different grades and the result will be 1');
});




