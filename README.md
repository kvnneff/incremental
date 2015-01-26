# Increment

  Increment numerically or alphabetically.  Allows passing options to skip values or adjust size of increment.  For both node.js and the browser.

## Example

```js
increment(1, [2, 3]) // 4
increment('A', ['B', 'C']) // 'D'
increment(1, [3, 5], 2) // 7
increment('A', [], 2) // 'D'
```

## Installation

    $ npm install incremental

or in the browser...

    $ component install staygrimm/incremental

## API

### increment(value, [skip], incrementBy)

Increment `value` by `incrementBy`. Optionally skip any values within `skip`.

## License

The MIT License (MIT)

Copyright (c) 2015 River Grimm <river.grimm@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.