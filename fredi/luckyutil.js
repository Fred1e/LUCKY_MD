
const alphautil = async (context, next) => {
    const { ms, superUser, verifAdmin, verifGroupe } = context;

    if (!verifGroupe) {
        return repondre("This command is meant for groups");
    }
    if (!superUser) {
        return repondre("You need owner permission to execute this command.");
    }
    if (!verifAdmin) {
        return repondre("I need admin privileges");
    }

    await next(); // Proceed to the next function (main handler)
};

module.exports = alphautil;
