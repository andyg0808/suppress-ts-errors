import type { Arguments, Argv } from "yargs";
import { DEFAULT_OPTIONS } from "../lib/constants";
import { tsHandler } from "../handlers/tsHandler";
import { tsconfigExists } from "../lib/isExistTsConfig";

export const command: string[] = ["*", "ts"];
export const desc = "Suppress TS errors in TypeScript files";

export const builder = (yargs: Argv<DefaultOptions>): Argv<DefaultOptions> =>
  yargs.options(DEFAULT_OPTIONS).check(tsconfigExists);

export const handler = (argv: Arguments<DefaultOptions>): void => {
  const { commentType, tsconfigPath, errorCode } = argv;

  const insertedCommentCount = tsHandler({
    tsconfigPath,
    commentType,
    errorCode,
  });

  console.log("\nCompleted 🎉");
  console.log(`suppress errors: ${insertedCommentCount}`);
};
