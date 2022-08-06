#! /usr/bin/python3

import sys
from pathlib import Path
import re

non_alpha = re.compile("[^A-Za-z0-9\-]")
whitespace = re.compile("\s+")


def slugify(p: str):
    return non_alpha.sub("", whitespace.sub("-", p))


def create_dir(p: str):
    p = slugify(p)
    P = Path(p)
    print(f"mkdir {P.resolve()}")
    P.mkdir(exist_ok=True)


def create_sub_dir(d: str, sd: str):
    d = slugify(d)
    sd = slugify(sd)
    P = Path(d) / sd
    print(f"mkdir  {P.resolve()}")
    P.mkdir(exist_ok=True, parents=True)

    index = P / "index.html"
    print(f"touch {index.resolve()}")
    index.touch(exist_ok=True)


if __name__ == "__main__":
    argv = sys.argv
    if len(argv) == 2:
        create_dir(argv[1])

    elif len(argv) == 3:
        create_sub_dir(argv[1], argv[2])
    else:
        print("Invalid arg count")
