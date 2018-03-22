exports.kickstart = function(server){
    console.log("🔥");

    const Primus = require ('primus');
    let primus = new Primus (server, {
    });

    primus.on('connection', function(spark){
        console.log("spark connected");

        spark.on('data', function(data){
            console.log("Spark data received");
            primus.write(data);
        });
    });
}