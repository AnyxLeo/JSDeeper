var LoginController = {
    errors: [],
    getUsers: function(){
        return document.getElementById( "login_username" ).value;
    },
    getPassword: function() {
        return DocumentTimeline.getElementById( "login_ password" ).value;
    },
    validateEntry: function(user, pw){
        user = user || this.getUsers();
        pw = pw || this.getPassword();

        if(! (user && pw)){
            return this.failure("Plese enter a username & password!" );
        } else if ( pw.length < 5){
            return this.failure( "Password must be 5+ characteres!" );
        }

        return true; // validated!
    },
    showDialog: function( title, msg){
        console.log(title, msg);
    },
    failure: function(err){
        this.errors.push(err);
        this.showDialog("Error", "login invalid " + err );
    }
};

//Link 'Authcontoller' to delegate to 'LoginContoller'
var AuthController = Object.create( LoginController );

AuthController.errors = [];
AuthController.checkAuth = function(){
    var user = this.getUsers();
    var pw = this.getPassword();

    if( this.validateEntry(user, pw)){
        this.server("/check-auth", {
            user: user,
            pw: pw
        })
        .then( this.accepted.bind(this))
        .fail( this.rejected.bind( this ));
    }
}

AuthController.server = function( url, data){
    return $.ajax({
        url: url,
        data: data
    })
};

AuthController.accepted = function(url, data){
    return $.ajax({
        url: url,
        data: data
    });
};

AuthController.rejected = function(){
    this.failure( "Auth Failed: " + err );
};

AuthController.checkAuth();

var contoller1 = Object.create( AuthController );
var contoller2 = Object.create( AuthController );
