function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

        firstName: {

            get: function() {
                return this.fullName.split(' ')[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }

        },

        lastName: {

            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }

        }

    });
}

let carl = new User("Carl Metew");


alert( carl.firstName );
alert( carl.lastName );

carl.lastName = 'notMetew';

alert( carl.fullName );
