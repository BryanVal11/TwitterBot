module.exports = async function (context, req) {
    context.log('salida en el log');
    context.res = {
        body: "Mi primer tweet"
    };
};