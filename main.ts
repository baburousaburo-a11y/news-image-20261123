// news-image-20261123 entry (Node 22, standard library only).
// The image is entry.png beside this file: a 2x2 editorial montage
// summing up Monday 23 November 2026 (Nvidia brings back Jensen Huang,
// Ukraine sinks a Russian warship off Libya, COP31 collapses, NATO sends
// AWACS to Poland). The program copies it byte-for-byte to the output
// directory, so the result is identical on every run. No network access.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
