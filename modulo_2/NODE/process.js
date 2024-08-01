//argumentos de entrada
console.log(process.argv);

/*console.log(`Bienvenido ${process.argv[2]}`);

controlar el proceso y su salida
process.exit(1);

podemos controlar eventos del proceso
process.on('exit',() = > {
    console.log('El proceso va a terminar');
});*/

//current working directory
console.log(process.cwd());

//platform
console.log(process.env.HOSTNAME);