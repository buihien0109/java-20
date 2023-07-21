(function () {
    // Add parse and format functions to using validate date time 
    validate.extend(validate.validators.datetime, {
        parse: function (value, options) {
            return +moment.utc(value);
        },
        format: function (value, options) {
            var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
            return moment.utc(value).format(format);
        },
    });
    const constraints = {
        email: {
            presence: true,
            email: {
                message: 'Please enter valid email'
            },
        },
        password: {
            presence: true,
            length: {
                minimum: 8,
            },
        },
        "confirm-password": {
            presence: true,
            equality: {
                attribute: "password",
                message: "^The passwords does not match",
            },
        },
        name: {
            presence: true,
            length: {
                minimum: 3,
                maximum: 20,
                message : "abc"
            },
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: " can only contain a-z and 0-9",
            },
        },
        phone: {
            presence: true,
            length: {
                minimum: 10,
                maximum: 11,
            },
            format: {
                pattern: "[0-9]+",
                flags: "i",
                message: "can only contain a-z and 0-9",
            },
        },
        birthday: {
            presence: true,
            datetime: {
                dateOnly: true,
                latest: moment.utc().subtract(18, 'years'),
                message: "^You need to be at least 18 years old"
            }
        },
    }

    $('#email').blur(() => {
        let error = validate.single($('#email').val(), constraints.email) || {};
        $('#error-email').html(error)
    })

    $('#name').blur(() => {
        let error = validate.single($('#name').val(), constraints.name) || {};
        $('#error-name').html(error)
    })

    $('#password').blur(() => {
        let error = validate.single($('#password').val(), constraints.password) || {};
        $('#error-password').html(error)
    })

    $('#confirm-password').blur(() => {
        let error = validate.single($('#confirm-password').val(), constraints["confirm-password"]) || {};
        $('#error-confirm-password').html(error)
    })

    $('#phone').blur(() => {
        let error = validate.single($('#phone').val(), constraints.phone) || {};
        $('#error-phone').html(error)
    })

    $('#birthday').change(() => {
        console.log($('#birthday').val())
        let error = validate.single($('#birthday').val(), constraints.birthday) || {};
        $('#error-birthday').html(error)
    })
})();
