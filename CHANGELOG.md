# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-14)

<section class="features">

### Features

-   [`ebe6958`](https://github.com/stdlib-js/stdlib/commit/ebe6958b249324104a1aeca54a75480fb6555cdf) - add unary function database in `math/special/data` [(#8065)](https://github.com/stdlib-js/stdlib/pull/8065)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ece831b`](https://github.com/stdlib-js/stdlib/commit/ece831b187c2e9b9ee3d29b527b39b4005ee9fe8) - fallback to `assign` method
-   [`280494a`](https://github.com/stdlib-js/stdlib/commit/280494ae7aa4394e84bcf9aaa2833698a0b6a82c) - ensure support for \"generic\" ndarrays

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`a2e3f27`](https://github.com/stdlib-js/stdlib/commit/a2e3f27361ab16d06646e4d08a3eb3f46821a678): remove support for non-ndarray arguments

    -   To migrate, users should wrap non-ndarray arguments using
        `@stdlib/ndarray-array` or `@stdlib/ndarray/from-scalar` which will
        convert non-ndarray arguments to ndarrays. In general, if a user
        is providing a number, a user is likely to want a number in return.
        Similarly for built-in array types. So always returning an ndarray
        is likely not what a user wants. This change essentially requires
        users to be explicit about what implementation and behavior they
        desire. If a user still wants to retain previous behavior, they
        can write a thin wrapper a top the new API which performs delegation
        based on whether an input argument is a scalar, array, or an ndarray.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`ebe6958`](https://github.com/stdlib-js/stdlib/commit/ebe6958b249324104a1aeca54a75480fb6555cdf) - **feat:** add unary function database in `math/special/data` [(#8065)](https://github.com/stdlib-js/stdlib/pull/8065) _(by Gunj Joshi, Athan Reines)_
-   [`c7229c9`](https://github.com/stdlib-js/stdlib/commit/c7229c91160851c316f4caefd6aea6e387621edd) - **refactor:** consolidate files _(by Athan Reines)_
-   [`491ccba`](https://github.com/stdlib-js/stdlib/commit/491ccba47c32b20c1e90e468d6e187aa0583e8b8) - **refactor:** reorder imports _(by Athan Reines)_
-   [`c63f610`](https://github.com/stdlib-js/stdlib/commit/c63f610323ce4a6a44f0d359525274bb174d5c76) - **refactor:** use add-on dispatch utility _(by Athan Reines)_
-   [`ece831b`](https://github.com/stdlib-js/stdlib/commit/ece831b187c2e9b9ee3d29b527b39b4005ee9fe8) - **fix:** fallback to `assign` method _(by Athan Reines)_
-   [`32598ec`](https://github.com/stdlib-js/stdlib/commit/32598ecb974bacd50b686118a78cf8d06f66f645) - **chore:** reorder keywords _(by Athan Reines)_
-   [`7fae2b3`](https://github.com/stdlib-js/stdlib/commit/7fae2b3248e89e03711cad05025272325ecfa044) - **docs:** update description _(by Athan Reines)_
-   [`3c7848b`](https://github.com/stdlib-js/stdlib/commit/3c7848b9132d720b08a8baefe90924c259e805cf) - **docs:** fix copy _(by Athan Reines)_
-   [`280494a`](https://github.com/stdlib-js/stdlib/commit/280494ae7aa4394e84bcf9aaa2833698a0b6a82c) - **fix:** ensure support for \"generic\" ndarrays _(by Athan Reines)_
-   [`a2e3f27`](https://github.com/stdlib-js/stdlib/commit/a2e3f27361ab16d06646e4d08a3eb3f46821a678) - **refactor:** remove support for non-ndarray arguments _(by Athan Reines)_
-   [`65ddf8d`](https://github.com/stdlib-js/stdlib/commit/65ddf8d4d51ccfda52d1c5a06408e43fb386c27e) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`77867ac`](https://github.com/stdlib-js/stdlib/commit/77867ac1767a186023f633dea30ddf860962aaed) - **docs:** remove trailing whitespace _(by Philipp Burckhardt)_
-   [`6eee151`](https://github.com/stdlib-js/stdlib/commit/6eee15199727d04e3757e66f38384e97b8a333da) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`b20b024`](https://github.com/stdlib-js/stdlib/commit/b20b0247ea520b8f715d41851cb7b1fbfdf2122d) - **style:** fix indentation in JSON files _(by Philipp Burckhardt)_
-   [`c7440db`](https://github.com/stdlib-js/stdlib/commit/c7440db4dc22b93ff8c981e9ae4e8853d62080cc) - **chore:** regenerate generated files _(by Athan Reines)_
-   [`3938b26`](https://github.com/stdlib-js/stdlib/commit/3938b265e603116448c89fcaa58df70e79d40f59) - **refactor:** update paths _(by Gururaj Gurram)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Gururaj Gurram
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="commits">

### Commits

<details>

-   [`96489fa`](https://github.com/stdlib-js/stdlib/commit/96489fa603a2920bef92fb38b49ca9468851714d) - **docs:** update namespace table of contents [(#1251)](https://github.com/stdlib-js/stdlib/pull/1251) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`2ee04a1`](https://github.com/stdlib-js/stdlib/commit/2ee04a1a56367b9663698aa0d01c10dca8d716df) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`714b339`](https://github.com/stdlib-js/stdlib/commit/714b3397c542f1caef3e9f91f65dbcaf0fec9afe) - **docs:** update links _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`98bc722`](https://github.com/stdlib-js/stdlib/commit/98bc7226e2c15c4a1d4bbf7a1d6c415271302c77) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`98bc722`](https://github.com/stdlib-js/stdlib/commit/98bc7226e2c15c4a1d4bbf7a1d6c415271302c77): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`98bc722`](https://github.com/stdlib-js/stdlib/commit/98bc7226e2c15c4a1d4bbf7a1d6c415271302c77) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`b734544`](https://github.com/stdlib-js/stdlib/commit/b734544a52783cb7f5cf1115f4355cabe46d0abe) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

