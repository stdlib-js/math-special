<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Special Functions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Special math functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-special
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math-special' );
```

#### ns

Namespace containing special math functions.

```javascript
var o = ns;
// returns {...}
```

### Exponential & Logarithmic Functions

<!-- <toc pattern="+(*log*|ln|exp*|*pow*)" ignore="logit" > -->



<!-- </toc> -->

### Trigonometric Functions

<!-- <toc pattern="*+(sin|cos|tan)*" ignore="+(kernel-sin|kernel-cos|kernel-tan)"> -->



<!-- </toc> -->

### Bessel Functions

<!-- <toc pattern="*bessel*" > -->



<!-- </toc> -->

### Absolute Value and Rounding Functions

<!-- <toc pattern="*+(abs|ceil|floor|clamp|trunc|round|signum)*" > -->

<div class="namespace-toc">

-   <span class="signature">[`abs( x[, options] )`][@stdlib/math/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value.</span>

</div>

<!-- </toc> -->

### Other Special Functions

<!-- <toc ignore="*bessel*" ignore="*+(sin|cos|tan)*" ignore="+(*log*|ln|exp*|*pow*)" ignore="*+(abs|ceil|floor|clamp|trunc|round|signum)*" ignore="+(gamma-delta-ratio|gamma-lanczos-sum*|rempio2|kernel-*)" > -->



<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/math-special' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-special.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-special

[test-image]: https://github.com/stdlib-js/math-special/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-special/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-special/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-special?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-special.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-special/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-special/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/special/abs]: https://github.com/stdlib-js/math-special-abs

<!-- </toc-links> -->

</section>

<!-- /.links -->
