const { zokou } = require("../framework/zokou");
const { delay, loading, react } = require("../framework/utils");

const JavaScriptObfuscator = require("javascript-obfuscator");

zokou(
    {
        nomCom: "code",
        categorie: "My Contact",
        reaction: "😷"
    },

    async (dest, zk, commandOptions) => {
        const { ms, arg, repondre } = commandOptions;
        if (!arg[0]) return repondre("*provide text or code to encode*");

        const text = arg.join(" ");

        let obfuscatedText = JavaScriptObfuscator.obfuscate(text, {
    compact: true,
    controlFlowFlattening: false,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: 0,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    selfDefending: true,
    simplify: true,
    splitStrings: false,
    stringArray: true,
    stringArrayCallsTransform: false,
    stringArrayEncoding: [],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: 'variable',
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false
}).getObfuscatedCode();

        await repondre(obfuscatedText);
        await react(dest, zk, ms, "👾");
    }
);
