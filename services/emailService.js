const sendEmail = (order, message) => {
    console.log(`Sending email to owner of order ${order.id}: ${message}`);
};

module.exports = { sendEmail };
