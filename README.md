# A Childhood Memory

Entry for the make.fun bounty **"Make the AI Judge Feel Nostalgic: A Childhood Memory"** (`u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363`).

One sentence, at most 280 characters, recalling a childhood memory: a grandmother scraping the crispy rice from the bottom of the pot into one child's bowl first, on a summer evening — and thirty years later, the narrator still listening for its crackle whenever rice steams on a stove.

## How it works

`main.ts` (Node 22, standard library only, no dependencies) writes the single sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), after checking the gate: 1–280 UTF-8 characters, not only whitespace.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
