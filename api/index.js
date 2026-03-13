module.exports = async function (context, req) {
    const name = req.query.name || "guest";

    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            message: `Hello ${name}`,
            timestamp: new Date().toISOString(),
            method: req.method,
            app: "static-web-lab-api"
        }
    };
};