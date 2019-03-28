var Task ={
    setID: function (ID){ this.id = ID},
    outputID: function(){ console.log( this.id );}
};

// make 'XYZ' delegate to 'Task?
var XYZ = Object.create( Task );

XYZ.prepareTask = function(ID, Label){
    this.setID( ID );
    this.label = Label;
};

XYZ.outputTaskDetails = function(){
    this.outputID();
    console.log( this.label );
}

var ABC = Object.create( Task );

XYZ.prepareTask = function(ID, Label, Status){
    this.setID( ID );
    this.label = Label;
    this.status = Status;
};

XYZ.outputTaskDetails = function(){
    this.outputID();
    console.log( this.label + ' ' + this.Status );
}