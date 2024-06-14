const paymentRules = [
    {
        condition: (order) => order.productType === "physical",
        action: (order) => {
            order.shipmentSlip.push(
                "Generate shipment slip for physical product"
            );
            order.commissionPayments.push(
                "Generate commission payment to agent"
            );
        },
    },
    {
        condition: (order) => order.productType === "book",
        action: (order) => {
            order.shipmentSlip.push("Generate shipment slip for book");
            order.shipmentSlip.push(
                "Duplicate shipment slip for royalties department"
            );
            order.commissionPayments.push(
                "Generate commission payment to agent"
            );
        },
    },
    {
        condition: (order) => order.isMembership && !order.isUpgrade,
        action: (order) => {
            order.emailNotifications.push(
                "Activate membership and notify owner"
            );
        },
    },
    {
        condition: (order) => order.isUpgrade,
        action: (order) => {
            order.emailNotifications.push("Apply upgrade and notify owner");
        },
    },
    {
        condition: (order) =>
            order.productType === "video" && order.id === "learning-ski",
        action: (order) => {
            order.shipmentSlip.push('Include free "First Aid" video');
        },
    },
];

module.exports = paymentRules;
