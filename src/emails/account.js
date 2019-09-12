const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jmenes1729@gmail.com',
        subject: 'Welcome to the task app',
        text: `Welcome to the app, ${name}, let us know how its working out for you`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jmenes1729@gmail.com',
        subject: 'Sorry to see you go',
        text: `Sorry to see you go, ${name}, let us know if theres anything we could do`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}