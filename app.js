var SDK = {
    version: function() {
        return 1;
    },
    formatText: function(templateFn, data) {
        this.name = data.name;
        console.log(templateFn.call(this));
    },
    greet: function (){
        return `Hello ${ this.name }`;
    },
    createLogger: function (templateFn, loggerName){  
        let calls = 0;
        return function(logMessage){
            calls++;
            console.log(
                calls + ' - ' + loggerName + ' - ' + templateFn.call(logMessage)
            );
        }
    },
    createLoggerAsync: async function (loggerName){
        return new Promise((resolve, reject) => {
            if(!loggerName){
                reject('You are missing the logger nam');
            }

            let calls = 0;
             resolve({               
                setLoggerFn: function (fn){
                   this.setLoggerFn = fn;
                },
                log: function (logMessage){  
                    calls++;                 
                    console.log(
                        calls + ' - ' + loggerName + ' - ' + this.setLoggerFn.call(logMessage)
                    );
                }
             });
        });
    }
};

SDK.formatText(SDK.greet, { name: 'Ana'});

function log (){
    return `Info: ${this.logMessage}`
}

const logger = SDK.createLogger(log, 'Main');
logger({logMessage: 'Init system'});
logger({logMessage: 'Init userspace'});

async function wait (){
    const loggerAsync = await SDK.createLoggerAsync('Main');
    console.log(loggerAsync);
    loggerAsync.setLoggerFn(log);
    loggerAsync.log({ logMessage: 'Init system' });
    loggerAsync.log({ logMessage: 'Init userspace' });
}

wait();

async function waitII (){
    try {
    const invalidLogger = await SDK.createLoggerAsync();
    }catch {
        throw 'Invalid promise';
    }
}

waitII();

