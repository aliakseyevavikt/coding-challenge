const {changeValue} = require("../JavaScript/change_variables_value");
const {reverse, reverse1, reverse11} = require("../JavaScript/reverse_string");
const {reverseWords} = require("../JavaScript/reverse_words_in_string");

const expect = require('chai').expect;

//change variable value
it('change variable value 64 => 37', () => {
    expect(changeValue(37, 64), 64, 38);
})

//reverse a string (all letters)

it('reverse a string version 1.0', () => {
    expect(reverse("Hello"), "ollлллллeH");
})

it('reverse a string version 2.0', () => {
    expect(reverse1("Hi World!"), "!dlroW olleH");
})

it('reverse a string version 3.0', () => {
    expect(reverse11("Hello everyone!"), "!enoyreve olleH");
})

//reverse words in the string

it('reverse words in the string', () => {
    expect(reverseWords("Hello my dear World"), "World dear my Hello");
})
