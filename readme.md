![status](https://img.shields.io/badge/build-ok-brightgreen.svg)
# autobadger
> Executes `make test` and generates the markdown link to the corresponding build badge.

## Install

Install it with

```
npm install autobadger
```
## Usage

```
Usage:
    autobadger [ -h | --help ]

Options:
	-h, --help              help for autobadger

Commands:

Arguments:

```

## Prerequisite

Have a `makefile` with a `test` target ready; autobadger tries to build it and emits a badge link (markdown) depending on the outcome.

Ideally, you should have a pre-commit hook that invokes it and puts it into the readme file.

## Author

* Vittorio Zaccaria

## License
Released under the BSD License.

***



# New features

-     produce svg status info about passing build -- [Jul 25th 15](../../commit/904602c2b7196fc5949a657d169abde73dc2197e)

# Bug fixes

-     update docs and tests -- [Jul 25th 15](../../commit/278108fa562621ad60e00691a06fb483a7bfc17d)
