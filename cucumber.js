let common = [
    "--require-module ts-node/register", // Load TypeScript module
    "--require step-definitions/**/*.ts", // Load step definitions
    "--format progress-bar", // Load custom formatter
].join(" ");

module.exports = {
    default: common,
    specs: ["./features/**/*..feature"],
    requireModule: ["ts-node/register"],
    require: ["step-definitions/**/*.ts"],
};
