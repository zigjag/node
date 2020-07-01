const sgMail = require('@sendgrid/mail')

const sendGridApiKey = "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"

sgMail.setApiKey(sendGridApiKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jkligel@gmail.com',
    subject: 'Welcome to the app!',
    text: `Welcome to the app, ${name}. Please let me know how you get along with the app.`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jkligel@gmail.com',
    subject: 'Au revoir, my friend',
    text: `I am sorry to see you go, ${name}. Please let me know if I could have done anything to improve your experience.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}
