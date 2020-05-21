const {reverse, reverse1, reverse11} = require("../JavaScript/reverse_string")
const expect = require('chai').expect;

it('reverse a string version 1.0', () => {
    expect(reverse("Hello"), "olleH");
})

it('reverse a string version 2.0', () => {
    expect(reverse1("Hi World!"), "!dlroW olleH");
})

it('reverse a string version 3.0', () => {
    expect(reverse1("Hello everyone!"), "!enoyreve olleH");
})

